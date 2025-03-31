// Import the functions you need from the SDKs you need
    
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js"
    
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyC4dqWkUpTNEHmX27ZPGw1mvp3SJoIDuSI",

  authDomain: "softwaredesign-b9565.firebaseapp.com",

  projectId: "softwaredesign-b9565",

  storageBucket: "softwaredesign-b9565.firebasestorage.app",

  messagingSenderId: "355043928033",

  appId: "1:355043928033:web:71185d82597b20187a14a0"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const submit_login = document.getElementById('submit_input');
submit_login.addEventListener('click')
