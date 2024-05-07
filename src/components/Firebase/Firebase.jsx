// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1dKegWvHAf1q4KsHVORTg0dSUTMpkglc",
  authDomain: "auth-email-4f043.firebaseapp.com",
  projectId: "auth-email-4f043",
  storageBucket: "auth-email-4f043.appspot.com",
  messagingSenderId: "525682607299",
  appId: "1:525682607299:web:019036dce54d7eaa330e76",
  measurementId: "G-7ZWW4MS1SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);