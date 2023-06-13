const logo = document.querySelector(".logo");
const rootElement = document.querySelector(":root");
const rootStyles = getComputedStyle(rootElement);
let currentThemeIndex = 3;
const colorCombos = [
    {
        "text": "black",
        "background": "#f9f9f9"
    },
    {
        "text": "red",
        "background": "#f9f9f9"
    },
    {
        "text": "blue",
        "background": "#f9f9f9"
    },
    {
        "text": "#3C3E98",
        "background": "#05C4BE"
    }
];
logo.addEventListener("click", ()=>{
    currentThemeIndex = (currentThemeIndex + 1) % colorCombos.length;
    changeColor("--text", colorCombos[currentThemeIndex].text);
    changeColor("--background", colorCombos[currentThemeIndex].background);
});
function changeColor(variable, color) {
    rootElement.style.setProperty(variable, color);
}

//# sourceMappingURL=dashboard.e5cbdaf9.js.map
