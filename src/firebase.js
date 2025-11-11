// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCIMTk4LhZLAQXq-0CAVpJOch1nLhvxgnI",
  authDomain: "demo2-11d1b.firebaseapp.com",
  databaseURL: "https://demo2-11d1b-default-rtdb.firebaseio.com",
  projectId: "demo2-11d1b",
  storageBucket: "demo2-11d1b.firebasestorage.app",
  messagingSenderId: "945817131145",
  appId: "1:945817131145:web:39b816b883e4c3876b4e58",
  measurementId: "G-BMJR6NNS85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
