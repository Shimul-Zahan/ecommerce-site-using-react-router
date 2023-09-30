import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, verifyBeforeUpdateEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import auth from '../Firebase/firebase.config';


export const MyContext = createContext(null);

const MyContextAPI = ({ children }) => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

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




// Number of props tha i passed
    const MySharedItem = {
        user,
        singUpGoogle,
        signUpwithEmail,
        createUser,
        paswordReset,
    }

    return (
        <MyContext.Provider value={MySharedItem}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextAPI