lucide.createIcons();

let output = ["0"];

//action buttons
const clear = document.getElementById("clear");

//number buttons
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

document.getElementById("output").innerHTML = output;

//Clear Button
clear.addEventListener("click", () => {
  output = ["0"];
  document.getElementById("output").innerHTML = output;
});

//Button 7
button7.addEventListener("click", () => {
  if (output.length == 1 && output[0] == "0") {
    output[0] = ["7"];
    document.getElementById("output").innerHTML = output;
  } else {
    output += ["7"];
    document.getElementById("output").innerHTML = output;
  }
});

//Button 8
button8.addEventListener("click", () => {
  if (output.length == 1 && output[0] == "0") {
    output[0] = ["8"];
    document.getElementById("output").innerHTML = output;
  } else {
    output += ["8"];
    document.getElementById("output").innerHTML = output;
  }
});

//Button 9
button9.addEventListener("click", () => {
  if (output.length == 1 && output[0] == "0") {
    output[0] = ["9"];
    document.getElementById("output").innerHTML = output;
  } else {
    output += ["9"];
    document.getElementById("output").innerHTML = output;
  }
});

//Button 4
button4.addEventListener("click", () => {
  if (output.length == 1 && output[0] == "0") {
    output[0] = ["4"];
    document.getElementById("output").innerHTML = output;
  } else {
    output += ["4"];
    document.getElementById("output").innerHTML = output;
  }
});

//Button5
button5.addEventListener("click", () => {
  if (output.length == 1 && output[0] == "0") {
    output[0] = ["5"];
    document.getElementById("output").innerHTML = output;
  } else {
    output += ["5"];
    document.getElementById("output").innerHTML = output;
  }
});

//Button 6
button6.addEventListener("click", () => {
  if (output.length == 1 && output[0] == "0") {
    output[0] = ["6"];
    document.getElementById("output").innerHTML = output;
  } else {
    output += ["6"];
    document.getElementById("output").innerHTML = output;
  }
});

//Button 1
button1.addEventListener("click", () => {
  if (output.length == 1 && output[0] == "0") {
    output[0] = ["1"];
    document.getElementById("output").innerHTML = output;
  } else {
    output += ["1"];
    document.getElementById("output").innerHTML = output;
  }
});

//Button 2
button2.addEventListener("click", () => {
  if (output.length == 1 && output[0] == "0") {
    output[0] = ["2"];
    document.getElementById("output").innerHTML = output;
  } else {
    output += ["2"];
    document.getElementById("output").innerHTML = output;
  }
});

//Button 3
button3.addEventListener("click", () => {
  if (output.length == 1 && output[0] == "0") {
    output[0] = ["3"];
    document.getElementById("output").innerHTML = output;
  } else {
    output += ["3"];
    document.getElementById("output").innerHTML = output;
  }
});
