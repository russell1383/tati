import { useState , useEffect} from 'react';
// import { showNotification } from "../utils/notifications";
import {
    GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup,
    FacebookAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, signOut,signInWithRedirect
} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [cartProducts, setCartProducts] = useState([]);
    const [userOrder, setUserOrder] = useState({});
    const [isLoading, setIsLoading] = useState(true);;
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();

    // const signInWithGoogle = (location, history) => {
    //         setIsLoading(true);
    //         signInWithPopup(auth, googleProvider)
    //         .then((result) => {
    //             const user = result.user;
    //             setError('');
    //             setLoggedInUser(user);
    //             // const destination = location?.state?.from || '/'
    //             // history.push(destination);
    //             // let destination = location.state || { from: { pathname: "/" } };
    //             // history.replace(destination);
    //             // const destination = location?.state?.from || '/'
    //             // showNotification("Logged in Successfully!");
              
    
    //         }).catch((error) => {
    //             setError(error.message);
    //         });

    // }

    const signInWithGoogle = () => {
       return  signInWithPopup(auth, googleProvider)
 
  }

    // phone otp verification
    const setUpRecaptcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {},
      auth);
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier); 
    }
    // facebook login
    const signInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
        // signInWithRedirect(auth, facebookProvider)
        
}
    // 
     useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
           console.log(loggedInUser)
            if (loggedInUser) {
               setLoggedInUser(loggedInUser);
            } else {
               setLoggedInUser({});
               
           }
           setIsLoading(false);
        });
        return () => unsubscribe;
        
    }, [auth])
    // logout 
     const logOut = () => {
        setIsLoading(true);
         signOut(auth).then(() => {

            
           
        }).catch((error) => {
            
        })
            .finally(() => setIsLoading(false));
        
    }


    return {
        signInWithGoogle,
        user: [loggedInUser, setLoggedInUser],
        products: [cartProducts, setCartProducts],
        order: [userOrder, setUserOrder],
        setUpRecaptcha,
        error,
        setError,
        logOut,
        isLoading,
        signInWithFacebook,
        setIsLoading
    }
};

export default useFirebase;