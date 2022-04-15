// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6pI82g7E9PYtWpVrCc3J6vrOgIaeoA80",
  authDomain: "ema-john-simple-3ce2e.firebaseapp.com",
  projectId: "ema-john-simple-3ce2e",
  storageBucket: "ema-john-simple-3ce2e.appspot.com",
  messagingSenderId: "975910656555",
  appId: "1:975910656555:web:908532c56b3a8c7dba686e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;