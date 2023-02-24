// Changing Element on Hero Page

var textElem = document.getElementById("text");
var textArray = ["Freelancer", "Designer" , "Developer"];
var currentText = 0;

function changeText() {
  textElem.innerHTML = textArray[currentText];
  currentText = (currentText + 1) % textArray.length;
}

changeText();
setInterval(changeText, 1000);













  