// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCULiJKs6qCWBaYEqVSLdLy08rjEgGU_uE",
  authDomain: "inventory-management-45a25.firebaseapp.com",
  projectId: "inventory-management-45a25",
  storageBucket: "inventory-management-45a25.appspot.com",
  messagingSenderId: "70430867571",
  appId: "1:70430867571:web:7634b18907b1c0f8b1aa06",
  measurementId: "G-TGVP22VDM4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
