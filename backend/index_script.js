//this whole code function is to display the sign in and sign up design in html


const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');
const signInButton2=document.getElementById('signIn_Button2');
const signUpButton2=document.getElementById('signUp_Button2');


signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
});
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
});


signUpButton2.addEventListener('click', function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
});

signInButton2.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
});
