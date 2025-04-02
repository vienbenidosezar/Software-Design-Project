// Import the functions you need from the SDKs you need
    
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js"
    
const firebaseConfig = {
  apiKey: "AIzaSyC4dqWkUpTNEHmX27ZPGw1mvp3SJoIDuSI",
  authDomain: "softwaredesign-b9565.firebaseapp.com",
  projectId: "softwaredesign-b9565",
  storageBucket: "softwaredesign-b9565.firebasestorage.app",
  messagingSenderId: "355043928033",
  appId: "1:355043928033:web:71185d82597b20187a14a0"
};

 const app = initializeApp(firebaseConfig);

 function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }

 const signUp=document.getElementById('submitSignUp');
 
 signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('rEmail').value;
    const password=document.getElementById('rPassword').value;
    const firstName=document.getElementById('fName').value;
    const lastName=document.getElementById('lName').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;

        sendEmailVerification(auth.currentUser)
                .then(() => {
                    showMessage('Email Verification link sent', 'signUpMessage')
                });

        const userData={
            email: email,
            firstName: firstName,
            lastName:lastName
        };
        
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef=doc(db, "users", user.uid);
        setDoc(docRef,userData)
        .then(()=>{
            window.location.href='index.html';
        })
        .catch((error)=>{
            console.error("Error writing document", error);

        });
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            showMessage('Email Address Already Exists!', 'signUpMessage');
        }
        else{
            showMessage('Unable to create User', 'signUpMessage');
        }
    })
 });

 const signIn = document.getElementById('submitSignIn');

 signIn.addEventListener('click', (event) => {
     event.preventDefault();
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     const auth = getAuth();
 
     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
         const user = userCredential.user;
 
         // Check if the user's email is verified
         if (user.emailVerified) {
             showMessage('Login is successful', 'signInMessage');
             localStorage.setItem('loggedInUserId', user.uid);
             window.location.href = 'homepage.html';
         } else {
             showMessage('Please verify your email before logging in.', 'signInMessage');
         }
     })
     .catch((error) => {
         const errorCode = error.code;
         if (errorCode === 'auth/invalid-credential') {
             showMessage('Incorrect Email or Password', 'signInMessage');
         } else {
             showMessage('Account does not Exist', 'signInMessage');
         }
     });
 });