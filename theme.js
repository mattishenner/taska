import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "./app.js";
import { doc, setDoc, getDoc } from "firebase/firestore";

const logo = document.querySelector('.logo');
const rootElement = document.querySelector(':root');
const rootStyles = getComputedStyle(rootElement);

let currentThemeIndex = 0;

const colorCombos = [
    {
        'text': 'black',
        'background': '#f9f9f9'
    },
    {
        'text': 'red',
        'background': '#f9f9f9'
    },
    {
        'text': 'blue',
        'background': '#f9f9f9'
    },
    {
        'text': '#3C3E98',
        'background': '#05C4BE'
    },
    {
        'text': '#B2FF51',
        'background': '#D0A2FF'
    },
    {
        'text': '#000000',
        'background': '#FFD600'
    },
    {
        'text': '#FFFFFF',
        'background': '#F10000'
    },
    {
        'text': '#000000',
        'background': '#FF0000'
    },
    {
        'text': '#FF7EE3',
        'background': '#0024DF'
    },
    {
        'text': '#222222',
        'background': '#9EFF00'
    },
    {
        'text': '#FF483D',
        'background': '#00B2FF'
    },
    {
        'text': '#FFF73D',
        'background': '#005C83'
    },
    {
        'text': '#3C3E98',
        'background': '#F9F9F9'
    },
    {
        'text': '#8FDF29',
        'background': '#F9F9F9'
    },
    {
        'text': '#F4B000',
        'background': '#F9F9F9'
    },
    {
        'text': '#FF5C00',
        'background': '#F9F9F9'
    },
    {
        'text': '#FF7EE3',
        'background': '#F9F9F9'
    },
    {
        'text': '#FF7EE3',
        'background': '#F9F9F9'
    },
]


logo.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % colorCombos.length;
    changeColor('--text', colorCombos[currentThemeIndex].text);
    changeColor('--background', colorCombos[currentThemeIndex].background);
    saveTheme();
});


function changeColor(variable, color) {
    rootElement.style.setProperty(variable, color);
}


//Firestore
async function saveTheme() {
    const userDoc = doc(db, "users", auth.currentUser.uid);
    await setDoc(userDoc,
        {
            theme: { lastTheme: currentThemeIndex }
        }, 
        //Merge with exsisting user doc
        {
            merge: true
        }
    );
}


onAuthStateChanged(auth, async (user) => {
    if (user){
        const userDoc = doc(db, "users", auth.currentUser.uid);
        const userDocSnap = await getDoc(userDoc);
        const userData = userDocSnap.data();
        if (userData.theme) {
            currentThemeIndex = userData.theme.lastTheme;
            changeColor('--text', colorCombos[currentThemeIndex].text);
            changeColor('--background', colorCombos[currentThemeIndex].background);
        }
    }
})