// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'
// const firebaseConfig = {
//   apiKey: "AIzaSyD3uWIlEBpgaqsXArfYT5ihHoLUkU91JYA",
//   authDomain: "elearn-4aded.firebaseapp.com",
//   projectId: "elearn-4aded",
//   storageBucket: "elearn-4aded.appspot.com",
//   messagingSenderId: "1042041527635",
//   appId: "1:1042041527635:web:12f92e0b241eb3dd40d5a6"
// };// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3uWIlEBpgaqsXArfYT5ihHoLUkU91JYA",
  authDomain: "elearn-4aded.firebaseapp.com",
  projectId: "elearn-4aded",
  storageBucket: "elearn-4aded.appspot.com",
  messagingSenderId: "1042041527635",
  appId: "1:1042041527635:web:4d5397e8e0db363f40d5a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export default app;
