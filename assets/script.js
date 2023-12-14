// Assignment code here

// An array stores a collection of multiple items under a single variable name
// Arrays for uppercase letters, lowercase letters, numbers, and special characters
// The constant declaration declares block-scoped local variables. The value of a constant cannot be reassigned.
// Uppercase array
const cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Lowercase array
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Numbers array
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Special characters array
const special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "'"];
// Password String array for displaying password to user
// Stores all of the generated random characters
const passString = [];


// Accept user password criteria with prompts

function userChoiceLength() {
  // While loop repeats initial code block as long as the condition evaluates to true
  while (true) {
    // Prompt () takes length of the password
    userChoiceLengthInput = prompt('Please enter a password length between at least 8 characters and no more than 128 characters.');
    // userChoiceLengthInput == null means the user's password length has no value
    if (userChoiceLengthInput === null) {
      // Alerts wrapped in if-statements for all other options the user wants
      window.alert('Your password must contain at least 8 characters and no more than 128 characters.');
      return true;
    } else {
      // userChoiceLengthInput == null means the user's password length has no value
      // isNaN(userChoiceLengthInput) means the user's password length is not a number
      // userChoiceLengthInput < 8 means the user's password length is less than 8 characters
      // userChoiceLengthInput > 128 means the user's password length is longer than 128 characters   
      if (userChoiceLengthInput == null || isNaN(userChoiceLengthInput) || userChoiceLengthInput < 8 || userChoiceLengthInput > 128) {
        window.alert('Your password must contain at least 8 characters and no more than 128 characters.');
      } else {
        return userChoiceLengthInput;
      }
    }
  }
};

// Verify user's criteria
// At least one character type must be confirmed

function UpperPrompt() {
  // Confirm allows option to enter "No" with Cancel Button
  // If the user clicks "OK," the box returns true.  If the user clicks "Cancel," the box returns false.
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

// generatePassword function creates the password based on user's criteria

function generatePassword() {

  var passwordSize = userChoiceLength();
  console.log(passwordSize);

  // Initialize an empty array for character sets based on the user's criteria

  var possibleCharacters = [];

  // The concatenation method joins 2 or more arrays and returns a new array
  // With user's criteria, concat constant variable arrays to possibleCharacters array
  // Each user criteria array is concatenated as long as it is confirmed 
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
  
  if (possibleCharacters.length == 0) {
    window.alert("You must select at least one character type to include. Click 'OK' to start over.")
   return generatePassword();
  };

  // Convert passString array into a string
  // getRandom function returns the amount of characters in possibleCharacters array through for-loops
  // For-loops execute code more than once
  // (i=0) means the index starts at 0
  // (i < passwordSize) means the for-loop will run as long as the index number is less than the length of passwordSize function expression
  // (i++) is the incremental increase for each index integer
  var passString = ""
  for (i = 0; i < passwordSize; i++) {
    // This statement will run each time the loop is executed
    passString = passString + getRandom(possibleCharacters);
  }

  // Display password to the page
  return passString;
}

// getRandom function returns a random character or number for possibleCharacters array

// getRandom returns one character or number at a time
function getRandom(arr) {
  // Math.random method returns a random number from 0 (inclusive) up to but not including 1 (exclusive)
  // Math.floor method rounds a number DOWN to the nearest integer
  // Math.floor(Math.random) multiplies by arrary.length for the total number of potential characters possible
  var randIndex = Math.floor(Math.random() * arr.length);
  console.log(randIndex);
  var randElement = arr[randIndex];
  console.log(randElement);
  return randElement;
};

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
