// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiCCzqVdhZV9cpbu1_8D873AZt0bHBJ9M",
  authDomain: "inventory-management-f3305.firebaseapp.com",
  projectId: "inventory-management-f3305",
  storageBucket: "inventory-management-f3305.appspot.com",
  messagingSenderId: "908780229584",
  appId: "1:908780229584:web:13430e6eba0c21db2d5fd5",
  measurementId: "G-R2C015S4NF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
