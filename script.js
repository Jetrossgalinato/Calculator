lucide.createIcons();

let output = 0;

//action buttons
const clear = document.getElementById("clear");

//number buttons
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");

document.getElementById("output").innerHTML = output;

//Clear Button
clear.addEventListener("click", () => {
  output = 0;
  document.getElementById("output").innerHTML = output;
});

//Button 7
button7.addEventListener("click", () => {
  output = 7;
  document.getElementById("output").innerHTML = output;
});

//Button 8
button8.addEventListener("click", () => {
  output = 8;
  document.getElementById("output").innerHTML = output;
});

//Button 9
button9.addEventListener("click", () => {
  output = 9;
  document.getElementById("output").innerHTML = output;
});

//Button 4
button4.addEventListener("click", () => {
  output = 4;
  document.getElementById("output").innerHTML = output;
});

//Button5
button5.addEventListener("click", () => {
  output = 5;
  document.getElementById("output").innerHTML = output;
});

//Button 6
button6.addEventListener("click", () => {
  output = 6;
  document.getElementById("output").innerHTML = output;
});
