"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../utils/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // Sign in with GitHub
  const gitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Sign out
  const firebaseSignOut = () => {
    return signOut(auth);
  };

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use authentication context
export const useUserAuth = () => {
  return useContext(AuthContext);
};