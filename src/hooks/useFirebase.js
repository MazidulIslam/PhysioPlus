import {
  GoogleAuthProvider,
  getAuth,
  updateProfile,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return (
      signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //   setUser(result.user);
        // })
        .finally(() => setIsLoading(false))
    );
  };

  const signUpWithEmailPassword = ({ email, password }) => {
    setIsLoading(true);
    // const { email, password } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // ...
      })
      .finally(() => setIsLoading(false));
  };

  const logInWithEmailAndPassword = ({ email, password }) => {
    setIsLoading(true);
    //   const { email, password} = data;
    return (
      signInWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //   // Signed in
        //   setUser(result.user);
        //   console.log(result.user);
        //   // ...
        // })

        .finally(() => setIsLoading(false))
    );
  };

  // Logout Function
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  return {
    isLoading,
    user,
    signInWithGoogle,
    logOut,
    signUpWithEmailPassword,
    logInWithEmailAndPassword,
  };
};

export default useFirebase;
