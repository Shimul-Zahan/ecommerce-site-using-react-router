import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { createContext } from 'react'
import auth from '../Firebase/firebase.config';


export const MyContext = createContext(null);

const MyContextAPI = ({ children }) => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const signUpwithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singUpGoogle = () => {
        return signInWithPopup(auth, provider);
    }




// Number of props tha i passed
    const MySharedItem = {
        singUpGoogle,
        signUpwithEmail,
    }

    return (
        <MyContext.Provider value={MySharedItem}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextAPI