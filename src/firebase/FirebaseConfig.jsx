// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD9CRJKulRreupzgjuSazq1CH25vwbH2s4",
  authDomain: "myecom-b29a5.firebaseapp.com",
  projectId: "myecom-b29a5",
  storageBucket: "myecom-b29a5.appspot.com",
  messagingSenderId: "286595620125",
  appId: "1:286595620125:web:a9ca105163b93a3aaa55f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }