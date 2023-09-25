import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC-g9sIqe5G4aTZ4Rbgq72oiO74snzY7-U",
  authDomain: "week02-62b5d.firebaseapp.com",
  projectId: "week02-62b5d",
  storageBucket: "week02-62b5d.appspot.com",
  messagingSenderId: "738110279878",
  appId: "1:738110279878:web:877cbfcded94b5e8dd47c7",
  measurementId: "G-WJKSS3Q9CJ"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export {
  firebaseApp,
  firebaseAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
};