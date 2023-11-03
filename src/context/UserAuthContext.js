import { createContext,useContext, useEffect, useState } from "react";
import {auth} from '../firebase'
import { createUserWithEmailAndPassword,
        onAuthStateChanged ,
       signInWithEmailAndPassword,
         GoogleAuthProvider,
    signInWithPopup,
signOut} from "firebase/auth";
const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user, setUser] = useState("");
   function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
   }
   function login(email,password) {
    return signInWithEmailAndPassword(auth,email,password)
   }
   function googleLogin(){
    const data = new GoogleAuthProvider();
    return signInWithPopup(auth,data);
   }
   function signout(){
    return signOut(auth)
   }

   useEffect(()=>{
        const data = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            data();
        }
   },[])
   return <userAuthContext.Provider value={{user,signup, login, googleLogin,signout}}>{children}</userAuthContext.Provider>
}

export function useUserContext() {
    return useContext(userAuthContext)
}