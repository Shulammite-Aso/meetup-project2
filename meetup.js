var button = document.getElementById("button");
//var userName = document.getElementById("name");
button.addEventListener('click', clickBtn);


function clickBtn() {

var parentNode = document.getElementById("body1");
var childNode = document.getElementsByClassName("wrapper");
parentNode.removeChild(childNode);

var para = document.createElement("p");
var newNode = document.createTextNode("Your registration is complete. You can now access every of our contents in your registered plan.");
para.appendChild(newNode);
var bodyElem = document.getElementById("body1");
bodyElem.appendChild(para);
};
//button.onclick = clickBtn();

var figmaIcon = document.getElementById("figma");
function figbutton() {
  alert("Figma is unavailaible now");
};
figmaIcon.onclick = figbutton;
