import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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
    signUp = !signUp;
    repeatPassword.classList.toggle("hidden");
    if(signUp){
        switchText.innerText = "Already have an account?";
        switchBtn.innerText = "Sign in";
        authBtn.innerText = "Sign Up";
    } else {
        switchText.innerText = "Don't have an account yet?";
        switchBtn.innerText = "Sign up";
        authBtn.innerText = "Sign In";
    }
}
if(window.location.href.includes("index")){
    switchForms();
}

if(switchBtn){
    switchBtn.addEventListener("click", switchForms);
}



//Authenticate users
if (authBtn) {
    authBtn.addEventListener("click",  (event) => {
        event.preventDefault()
        const email = document.getElementById("email-input").value;
        const password = document.getElementById("password-input").value;
        const repeatPassword = document.getElementById("repeat-password-input").value;

        //Create new user:
        if (signUp){
            if(password === repeatPassword){
                createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;

                    //Create new user doc 
                    const userRef = doc(db, "users", user.uid);
                    await setDoc(userRef, { hasBeenWelcomed: false});

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
            .then(async (userCredential) => {
                const user = userCredential.user;

                const userRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(userRef);
                if (!docSnap.exists()) {
                    await setDoc(userRef, { hasBeenWelcomed: false});
                }

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

moreBtn?.addEventListener("click", () => {
    menuContent.classList.toggle("show");
});
closeIcon?.addEventListener("click", () => {
    menuContent.classList.toggle("show");
});
