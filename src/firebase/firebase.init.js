// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALHptPiR5bYehBLBtNZ3tjYRp1w3jC4DU",
  authDomain: "coffee-store-app-64a79.firebaseapp.com",
  projectId: "coffee-store-app-64a79",
  storageBucket: "coffee-store-app-64a79.firebasestorage.app",
  messagingSenderId: "753985233353",
  appId: "1:753985233353:web:6330660d3f444467018818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);