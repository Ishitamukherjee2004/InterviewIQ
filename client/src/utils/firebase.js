// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-d2a71.firebaseapp.com",
  projectId: "interviewiq-d2a71",
  storageBucket: "interviewiq-d2a71.firebasestorage.app",
  messagingSenderId: "677074523378",
  appId: "1:677074523378:web:e551bbeaa5f203d6c12c6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };