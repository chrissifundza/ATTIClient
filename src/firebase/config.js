// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAwIDqNUQQK0qbN-_ae8-i7_bs01CKpWA",
  authDomain: "atti-e4de8.firebaseapp.com",
  projectId: "atti-e4de8",
  storageBucket: "atti-e4de8.appspot.com",
  messagingSenderId: "140154999128",
  appId: "1:140154999128:web:ad14055764709f1694152d",
  measurementId: "G-TG849E5J96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);