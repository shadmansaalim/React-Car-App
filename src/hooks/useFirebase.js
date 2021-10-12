import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(result => {
                setUsers({});
            })
    }

    return {
        users,
        signInUsingGoogle,
        logOut
    }
}