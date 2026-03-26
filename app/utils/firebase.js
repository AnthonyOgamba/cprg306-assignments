import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOZ_SLCBlKgFEQL6V_Gg6q5x0FBuBdj1k",
  authDomain: "cprg306-assignments-f6882.firebaseapp.com",
  projectId: "cprg306-assignments-f6882",
  storageBucket: "cprg306-assignments-f6882.firebasestorage.app",
  messagingSenderId: "837208513759",
  appId: "1:837208513759:web:411b0a3f8aca56e10bdd6a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);