// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA0CCSS2ETVTzCMpZoBrfOu9qqpOzVX4BM",
  authDomain: "school-report-system-10068.firebaseapp.com",
  projectId: "school-report-system-10068",
  storageBucket: "school-report-system-10068.firebasestorage.app",
  messagingSenderId: "442126579148",
  appId: "1:442126579148:web:453bca53db5ec0a2151969"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ⭐ THIS IS WHAT YOU WERE MISSING
export const db = getFirestore(app);
