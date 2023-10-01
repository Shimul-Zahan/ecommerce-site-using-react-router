import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, verifyBeforeUpdateEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import auth from '../Firebase/firebase.config';
import { searchItemInLC } from '../Utils/LocalStore/LocalStore';


export const MyContext = createContext(null);

const MyContextAPI = ({ children }) => {

    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const [TotalItem, setTotalItem] = useState([]);
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)

    const signUpwithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const singUpGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // const emailVerification = () => {
    //     return sendEmailVerification(auth.currentUser);
    // }

    const paswordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const subSribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('Logged in user', currentUser)
        }) 
        return () => {
            subSribed();
        };
    }, [])

    const getTotalCartItem = () => {
        setCount(count+1);
    }

    useEffect(() => {
        const totalItem = searchItemInLC();
        setTotalItem(totalItem);
        const total = totalItem.reduce((initial, current) => initial + current.price, 0);
        setTotalPrice(total.toFixed(2))
    }, [count])

    // console.log(totalPrice)


// Number of props tha i passed
    const MySharedItem = {
        user,
        singUpGoogle,
        signUpwithEmail,
        createUser,
        paswordReset,
        getTotalCartItem,
        TotalItem,
        totalPrice,
        
    }

    return (
        <MyContext.Provider value={MySharedItem}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextAPI