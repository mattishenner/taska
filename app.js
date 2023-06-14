import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTzLJMA3EEDCYqvmkkjxvgu8tnHTsGTPg",
  authDomain: "todo-fc8ee.firebaseapp.com",
  projectId: "todo-fc8ee",
  storageBucket: "todo-fc8ee.appspot.com",
  messagingSenderId: "625845186063",
  appId: "1:625845186063:web:c4719f86d90d512c227d7a"
};

//Initialize
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


//Toggle between sign up / sign in
const switchBtn = document.getElementById("switch-btn");
const switchText = document.getElementById("switch-text");
const authForm = document.querySelector("auth-form");
const repeatPassword = document.getElementById("repeat-password-input");
const authBtn = document.getElementById("auth-btn");
const googleBtn = document.getElementById("google-btn");
let signUp = true;

function switchForms(){
    console.log("switching forms")
    repeatPassword.classList.toggle("hidden");
    if(signUp){
        switchText.innerText = "Already have an account?";
        switchBtn.innerText = "Sign in";
        authBtn.innerText = "Sign in";
    } else {
        switchText.innerText = "Don't have an account yet?";
        switchBtn.innerText = "Sign up";
        authBtn.innerText = "Sign up";
    }
    signUp = !signUp;
}

if(switchBtn){
    switchBtn.addEventListener("click", switchForms);
}



//Authenticate users
if (authBtn) {
    authBtn.addEventListener("click", (event) => {
        event.preventDefault()
        const email = document.getElementById("email-input").value;
        const password = document.getElementById("password-input").value;
        const repeatPassword = document.getElementById("repeat-password-input").value;

        //Create new user:
        if (signUp){
            if(password === repeatPassword){
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("Signed up")
                    window.location.href = "dashboard.html";
                })
                .catch((error) => {
                console.log("error", error)
                })
            } else {
                window.alert("Passwords don't match :(")
            }
            
        //Sign in exsisting user:
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("Signed in")
                    window.location.href = "dashboard.html";
                })
                .catch((error) => {
                    console.log("error", error)
                });
        }
    })
}

//Sign in with Google
if (googleBtn) {
    googleBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("Signed in with Google")
                window.location.href = "dashboard.html";
            })
            .catch((error) => {
                console.log("error", error)
            });
    })
}

//Log out
const logoutBtn = document.getElementById("logout-btn");
if(logoutBtn){
    logoutBtn.addEventListener("click", (event) => {
        signOut(auth)
            .then(() => {
                console.log("Signed out")
            })
            .catch((error) => {
                console.log("error", error)
            })
    })
}

nonAuthPages = ["/index.html", "/"]
//Rerouting
// In dashboard.html, redirect to index if user is NOT signed in
onAuthStateChanged(auth, (user) => {
    if (!user && !nonAuthPages.includes(window.location.pathname)) {
      window.location.href = "index.html"; // User is not signed in
    }
});


const moreBtn = document.querySelector(".menu-btn");
const menuContent = document.querySelector(".menu-content");
const closeIcon = document.querySelector(".close-icon");

moreBtn.addEventListener("click", () => {
    menuContent.classList.toggle("show");
});
closeIcon.addEventListener("click", () => {
    menuContent.classList.toggle("show");
});
