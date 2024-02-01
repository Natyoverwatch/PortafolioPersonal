// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuXhPAtTh3fih3leYeol7vLLOEw1gBW3A",
    authDomain: "portafolionathasaiz.firebaseapp.com",
    projectId: "portafolionathasaiz",
    storageBucket: "portafolionathasaiz.appspot.com",
    messagingSenderId: "839423816809",
    appId: "1:839423816809:web:0cec7856615a8557639ef8",
    measurementId: "G-ZDLNCT4Q64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);