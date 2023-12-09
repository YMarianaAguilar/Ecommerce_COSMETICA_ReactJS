import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBRT36lhngEZnCVK1RJ2yW3Ik52a56Ituo",
  authDomain: "ecommerce-cosmetica.firebaseapp.com",
  projectId: "ecommerce-cosmetica",
  storageBucket: "ecommerce-cosmetica.appspot.com",
  messagingSenderId: "867694976864",
  appId: "1:867694976864:web:f8121045112748512dc805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 