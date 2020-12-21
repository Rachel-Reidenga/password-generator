// Assignment code here

// User input variables 

// Variables
var enter;
var confirmNumber;
var confirmChar;
var confirmLow;
var confirmUp;

// Arrays
var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", ";", ":", "/", "-", "_", "+", ];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9];

var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

console.log(characters, numbers, lowLetters, upLetters.length);

// Generate Password
function generatePassword() {
  enter = parseInt(prompt("Choose between 8 and 128 characters"));
}

if (!enter) {
  alert("Please select number of characters");
} 

else if (enter > 8 || enter < 128) {
  enter = parseInt(prompt("Please choose between 8 and 128"));
} 
  
  else {
  confirmNumber = confirm("Would you like your password to have numbers?")
  confirmChar = confirm("Would you like your password to have special characters?")
  confirmLow = confirm("Would you like your password to have lowercase letters?")
  confirmUp = confirm("Would you like your password to have uppercase letters?")
}


// Else if all "false"
if (!confirmNumber && !confirmChar && !confirmLow && !confirmUp) {
  choice = alert("You must select password parameters!")
}

// Else if all "true"
if (confirmNumber && confirmChar && confirmLow && confirmUp) {
  select = characters.concat(numbers, lowLetters, upLetters);
}

//Else if 3 "true"
else if (confirmNumber && confirmChar && confirmLow) {
  select = characters.concat(numbers, lowLetters,);
}
else if (confirmNumber && confirmChar && confirmUp) {
  select = characters.concat(numbers, upLetters,);
}
else if (confirmChar && confirmLow && confirmUp) {
  select = characters.concat(lowLetters, upLetters);
}
else if (confirmNumber && confirmLow && confirmUp) {
  select = numbers.concat(lowLetters, upLetters);
}

//Else if 2 "true"

//Else if 1 "true"

// Random selection
// console.log(Math.floor((Math.random() *128) + 1));
for (var i = 0; i < enter; i++) {
  var pickSelect = select(Math.floor(Math.random() * select.length));
  password.push(pickSelect);
}



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
