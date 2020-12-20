// Assignment code here

// User input variables 

var enter;
var confirmNumber;
var confirmChar;
var confirmLow;
var confirmUp;

// Variable values
characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", ";", ":", "/", "-", "_", "+", ];

numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,0];

lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

console.log(Math.floor((Math.random() *128) + 1));



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
