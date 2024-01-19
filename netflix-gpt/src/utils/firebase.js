// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9TADK0ne-k_j8Jbkra-R0fSuTNgfkOWY",
  authDomain: "netflixgpt-b8fee.firebaseapp.com",
  projectId: "netflixgpt-b8fee",
  storageBucket: "netflixgpt-b8fee.appspot.com",
  messagingSenderId: "443487975941",
  appId: "1:443487975941:web:60d0d57562a30885007a6c",
  measurementId: "G-RFCS1ZL9W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();