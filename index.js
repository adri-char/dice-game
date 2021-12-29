var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//generates random number between 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png";
//ranges from dice1.png - dice6.png from the images folder
var randomImageSource = "images/" + randomDiceImage;
//ranges from images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
//randomizes the first image upon refresh between images/dice1.png - images/dice6.png
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//1 grabs the 2nd image in the array
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🏆Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
