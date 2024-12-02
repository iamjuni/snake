"use strict";
// Instructions
console.log("Get current color mode: getCurrentMode();");
console.log("Change color mode: changeMode();");
// Set current color mode
class colorMode {
    mode;
    light;
    dark;
    constructor(mode, light, dark) {
        this.mode = mode;
        this.light = light;
        this.dark = dark;
    }
    getMode() {
        return this.mode;
    }
}
let currentMode = new colorMode("light", true, false);
// Get current mode
var getCurrentMode = () => {
    return currentMode.getMode();
};
// Access elements to change color
let background = document.body;
let getBoard = document.getElementById("board");
function changeMode() {
    if (currentMode.light == true) {
        // Turn dark mode on
        currentMode.mode = "dark";
        currentMode.light = false;
        currentMode.dark = true;
        background.style.backgroundColor = "#000c1e";
        getBoard.style.backgroundColor = "#29470c";
    }
    else if (currentMode.dark == true) {
        // Switch back to light mode
        currentMode.mode = "light";
        currentMode.light = true;
        currentMode.dark = false;
        background.style.backgroundColor = "";
        getBoard.style.backgroundColor = "";
    }
}
// Keep current mode on after game restarts
const saveMode = () => {
    if (currentMode) {
        changeMode();
    }
};
