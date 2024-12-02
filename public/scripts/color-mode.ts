// Instructions
console.log("Get current color mode: getCurrentMode();");
console.log("Change color mode: changeMode();");
console.log("Save current mode: saveMode();");

// Set current color mode
class colorMode {
  mode: string;
  light: boolean;
  dark: boolean;

  public constructor(mode: string, light: boolean, dark: boolean) {
    this.mode = mode;
    this.light = light;
    this.dark = dark;
  }

  public getMode(): string {
    return this.mode;
  }
}

let currentMode = new colorMode("light", true, false);

// Get current mode
var getCurrentMode = () => {
  return currentMode.getMode();
};

// Access elements to change color
let background: any = document.body;
let getBoard: any = document.getElementById("board");

function changeMode() {
  if (currentMode.light == true) {
    // Turn dark mode on

    currentMode.mode = "dark";
    currentMode.light = false;
    currentMode.dark = true;

    background.style.backgroundColor = "#000c1e";
    getBoard.style.backgroundColor = "#29470c";
  } else if (currentMode.dark == true) {
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
