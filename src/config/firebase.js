import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAsDh6Yk5SQvc8tsBiD4XYDs__-8RmoyzM",
    authDomain: "auth-4363a.firebaseapp.com",
    projectId: "auth-4363a",
    storageBucket: "auth-4363a.appspot.com",
    messagingSenderId: "681087305325",
    appId: "1:681087305325:web:520da7dc02b8f3241ba164",
    measurementId: "G-NF691SPT64"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
