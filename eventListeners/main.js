// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
let increaseWidth = function() {
  itemOne.style.width = "500px";
 }

itemOne.addEventListener("mouseover", increaseWidth);

let changeBackground = function() {
  itemTwo.style.backgroundColor = "red";
}

itemTwo.addEventListener("mouseup", changeBackground);

let changeText = function() {
  itemThree.innerHTML = "The mouse has left the element";
}

itemThree.addEventListener("mouseout", changeText);

let showItem = function() {
  itemFive.style.display = "block";
}

itemFour.addEventListener("mousedown", showItem);


/* Ball bounce JavaScript

let ball = document.getElementById('float-circle');

// Write your code below
let up = function() {
  ball.style.bottom = "250px";
}

let down = function() {
  ball.style.bottom = "50px";
}

document.addEventListener("keydown", up);
document.addEventListener("keyup", down)

*/