// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOZ_SLCBlKgFEQL6V_Gg6q5x0FBuBdj1k",
  authDomain: "cprg306-assignments-f6882.firebaseapp.com",
  projectId: "cprg306-assignments-f6882",
  storageBucket: "cprg306-assignments-f6882.firebasestorage.app",
  messagingSenderId: "837208513759",
  appId: "1:837208513759:web:411b0a3f8aca56e10bdd6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);