// Assignment code here
// generateBtn = document.querySelector("#generate");

// Arrays for numbers, uppercase, lowercase, and special characters

const cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", ];

// function passOpt = getPassOpt () {
// // (Prompt)
// var name = window.prompt("Enter your name: ");
// alert("Your name is " + name);
// (Alert)
// return;
// };

function generatePassword (length, uppercase, lowercase, special) {
  console.log ("This is working!")
  return "Generated password should go here!"
};

generatePassword ();

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
