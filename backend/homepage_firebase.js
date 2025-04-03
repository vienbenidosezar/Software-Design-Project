
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyC4dqWkUpTNEHmX27ZPGw1mvp3SJoIDuSI",
  authDomain: "softwaredesign-b9565.firebaseapp.com",
  projectId: "softwaredesign-b9565",
  storageBucket: "softwaredesign-b9565.firebasestorage.app",
  messagingSenderId: "355043928033",
  appId: "1:355043928033:web:71185d82597b20187a14a0"

};

  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();

  //this code will get the email and name of the user only
  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;

            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  //logout event, when it is logout it will automatically back to index.html
  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })