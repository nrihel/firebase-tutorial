// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpo0t3lV1uC2qhcvZ6WPgn07TIABvUSas",
  authDomain: "fir-practice-4cd66.firebaseapp.com",
  projectId: "fir-practice-4cd66",
  storageBucket: "fir-practice-4cd66.firebasestorage.app",
  messagingSenderId: "475361604265",
  appId: "1:475361604265:web:f576023e0bdf84442dafb8",
  measurementId: "G-82Q73Z6YQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();