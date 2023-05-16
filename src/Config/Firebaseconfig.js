// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGv8JI4bFqYgqjE-hQkJqSyTD6JAkmuT4",
  authDomain: "hackthon-6649b.firebaseapp.com",
  projectId: "hackthon-6649b",
  storageBucket: "hackthon-6649b.appspot.com",
  messagingSenderId: "559195784682",
  appId: "1:559195784682:web:ccde76dc13555d84931e93",
  measurementId: "G-00QQ76E1TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;