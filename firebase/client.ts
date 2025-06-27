// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWsEODvV_tLQqCbaxYNKqxrJEzSZhirco",
  authDomain: "prepwise-72001.firebaseapp.com",
  projectId: "prepwise-72001",
  storageBucket: "prepwise-72001.firebasestorage.app",
  messagingSenderId: "1025768246840",
  appId: "1:1025768246840:web:c5674752d271854c3120cd",
  measurementId: "G-2X4ZWNKLF9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);