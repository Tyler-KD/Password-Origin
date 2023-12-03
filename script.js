// Assignment code here
// generateBtn = document.querySelector("#generate");

// Arrays for numbers, uppercase, lowercase, and special characters

const cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "'"];
const passString = [];

var userChoiceLength = function LengthPrompt() {
  var userChoiceLengthInput = Number(prompt("How many characters would you like your password to be?\nPlease enter a length between 8 and 128 characters"));

  if (userChoiceLengthInput === 0) {
    window.alert("How many characters would you like your password to be?\nPlease enter a length between 8 and 128 characters")
    LengthPrompt();
  }
  if (userChoiceLengthInput < 8) {
    window.alert("Your password must contain more than 8 characters");
    LengthPrompt();
  }
  if (userChoiceLengthInput > 128) {
    window.alert("Your password must contain less than 128 characters");
    LengthPrompt();
  }
  else {
    return userChoiceLengthInput;
  };
};

var userChoiceUpper = function UpperPrompt() {
  var userChoiceUpperInput = window.confirm("Would you like to include upper case letters?");
  userChoiceUpper = userChoiceUpperInput;
};

var userChoiceLower = function LowerPrompt() {
  var userChoiceLowerInput = window.confirm("Would you like to include lower case letters?");
  userChoiceLower = userChoiceLowerInput;
};

var userChoiceNumber = function NumberPrompt() {
  var userChoiceNumberInput = window.confirm("Would you like to include numbers?");
  userChoiceNumber = userChoiceNumberInput;
};

var userChoiceSpecialCharacters = function SpecialCharactersPrompt() {
  var userChoiceSpecialCharactersInput = window.confirm("Would you like to include special characters?");
  userChoiceSpecialCharacters = userChoiceSpecialCharactersInput;
};

function UpperPrompt() {
  return confirm("Would you like to include upper case letters?");
};

function LowerPrompt() {
  return confirm("Would you like to include lower case letters?");
};

function NumbersPrompt() {
  return confirm("Would you like to include numbers?");
};

function SpecialPrompt() {
  return confirm("Would you like to include special characters?");
};

// generatePassword function
function generatePassword() {

  // accept user input (prompt)


  var passwordSize = userChoiceLength();
  console.log (passwordSize);
  // console.log("Password length: " + userChoiceLength);
  // userChoiceUpper();
  // console.log("Uppercase letters: " + userChoiceUpper);
  // userChoiceLower();
  // console.log("Lowercase letters: " + userChoiceLower);
  // userChoiceNumber();
  // console.log("Numbers: " + userChoiceNumber);
  // userChoiceSpecialCharacters();
  // console.log("Special Characters: " + userChoiceSpecialCharacters);

  // Initialize an empty array for character sets

  var possibleCharacters = [];


  if (UpperPrompt() === true) {
    possibleCharacters = possibleCharacters.concat(cap);
  };


  if (LowerPrompt() === true) {
    possibleCharacters = possibleCharacters.concat(lowercase);
  };


  if (NumbersPrompt() === true) {
    possibleCharacters = possibleCharacters.concat(numbers);
  };


  if (SpecialPrompt() === true) {
    possibleCharacters = possibleCharacters.concat(special);
  };

}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  console.log(randIndex);
  var randElement = arr[randIndex];
  console.log(randElement);
  return randElement;
};



// generatePassword ();

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
