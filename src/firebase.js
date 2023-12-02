// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHguyTkImvmkbrihzdaHWxR4XobKlPaSA",
  authDomain: "tinashe-4095e.firebaseapp.com",
  projectId: "tinashe-4095e",
  storageBucket: "tinashe-4095e.appspot.com",
  messagingSenderId: "987040705145",
  appId: "1:987040705145:web:cc1f7d99e06ef561c402a8",
  measurementId: "G-S52MTQ1LGZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
