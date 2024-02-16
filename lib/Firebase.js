// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMl5BnA2sF2qfTv0omlYVQSebFIacerQI",
  authDomain: "election-platform-223d9.firebaseapp.com",
  projectId: "election-platform-223d9",
  storageBucket: "election-platform-223d9.appspot.com",
  messagingSenderId: "336503613454",
  appId: "1:336503613454:web:7cd2d5a658501c821d345f",
  measurementId: "G-1RRSNLK1QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export {auth, firestore};
