lucide.createIcons();

let output = 0;

//action buttons
const clear = document.getElementById("clear");

//number buttons
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");

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
