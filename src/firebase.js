import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDMchJ8xgskDStpa9aO7sUnxZDNGtKA9Y",
  authDomain: "amzn-c17e5.firebaseapp.com",
  projectId: "amzn-c17e5",
  storageBucket: "amzn-c17e5.appspot.com",
  messagingSenderId: "1019250714431",
  appId: "1:1019250714431:web:6f15dab4989fee6e74158a",
  measurementId: "G-1R13E0TTP1",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

//initialize firebase auth
const auth = getAuth(firebaseApp);

export { auth, db };
