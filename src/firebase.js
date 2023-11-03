// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCAZ4XjvRhdP5NoGfnJImatzs0gihoUwk4",
  authDomain: "commerce-44bcd.firebaseapp.com",
  projectId: "commerce-44bcd",
  storageBucket: "commerce-44bcd.appspot.com",
  messagingSenderId: "589944002632",
  appId: "1:589944002632:web:115b52d7c02e054539e07d",
  measurementId: "G-KLRZXPTS4C"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);