// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-38c32.firebaseapp.com",
  projectId: "real-estate-38c32",
  storageBucket: "real-estate-38c32.appspot.com",
  messagingSenderId: "799279942867",
  appId: "1:799279942867:web:051140be21a6c83eda5826"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
