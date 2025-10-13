// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxRoXXnQgDI3MiEyaXv24FqaXqoDEeffA",
  authDomain: "netflixgpt-a8e1a.firebaseapp.com",
  projectId: "netflixgpt-a8e1a",
  storageBucket: "netflixgpt-a8e1a.firebasestorage.app",
  messagingSenderId: "942814599503",
  appId: "1:942814599503:web:f1cf2018b8684bb9078d3a",
  measurementId: "G-ZC6SHDMXFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();