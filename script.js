lucide.createIcons();

let output = "0";

//DOM elements
const outputDisplay = document.getElementById("output");

//action buttons
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");

function updateDisplay() {
  outputDisplay.innerHTML = output;
}

updateDisplay();

function appendCharacter(char) {
  if ((output === "0" && output.length === 1) || output === "Error!") {
    output = char;
  } else {
    output += char;
  }
  updateDisplay();
}

clearBtn.addEventListener("click", () => {
  output = "0";
  updateDisplay();
});

addBtn.addEventListener("click", () => {
  const lastChar = output.slice(-1);
  if (lastChar !== "+") {
    appendCharacter("+");
  }
});

subtractBtn.addEventListener("click", () => {
  const lastChar = output.slice(-1);
  if (lastChar !== "-") {
    appendCharacter("-");
  }
});

equalsBtn.addEventListener("click", () => {
  try {
    const result = eval(output);
    output = result.toString();
    updateDisplay();
  } catch (error) {
    output = "Error!";
    updateDisplay();
  }
});

//number buttons
document
  .getElementById("button7")
  .addEventListener("click", () => appendCharacter("7"));
document
  .getElementById("button8")
  .addEventListener("click", () => appendCharacter("8"));
document
  .getElementById("button9")
  .addEventListener("click", () => appendCharacter("9"));
document
  .getElementById("button4")
  .addEventListener("click", () => appendCharacter("4"));
document
  .getElementById("button5")
  .addEventListener("click", () => appendCharacter("5"));
document
  .getElementById("button6")
  .addEventListener("click", () => appendCharacter("6"));
document
  .getElementById("button1")
  .addEventListener("click", () => appendCharacter("1"));
document
  .getElementById("button2")
  .addEventListener("click", () => appendCharacter("2"));
document
  .getElementById("button3")
  .addEventListener("click", () => appendCharacter("3"));
document
  .getElementById("button.")
  .addEventListener("click", () => appendCharacter("."));
document
  .getElementById("button0")
  .addEventListener("click", () => appendCharacter("0"));
