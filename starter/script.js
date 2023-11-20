// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getpasswordOptions() {

    // // store value of each input in an object - INITIALISE THE OBJECT
    let passwordCriteria = {
      // numberOfCharacters: "",
      // lowercase: true,
      // uppercase: true,
      // numbers: true,
      // specialchars: true,
    };

  // window.prompt to check no. characters
  let numberOfCharacters = Number(window.prompt("How many characters would you like your password to be?"));

  // if no<8, return error message
  if (numberOfCharacters<8){
    window.prompt("Password must be at least 8 characters long. Please try again")
  }

  // if no>128, return error message (while loop)
  if (numberOfCharacters>128){
    window.prompt("Password cannot be longer than 8 characters long. Please try again")
  }
    passwordCriteria.numberOfCharacters = numberOfCharacters;
    console.log(passwordCriteria)

  // confirm(select okay to include lowercase letters)
  let lowercase = confirm("Select OK to include lowercase letters in your password")
  passwordCriteria.lowercase = lowercase;

  // confirm(select okay to include uppercase letters)
  let uppercase = confirm("Select OK to include uppercase letters in your password")
  passwordCriteria.uppercase = uppercase;

  // confirm(select okay to include numbers)
  let numbers = confirm("Select OK to include numbers in your password")
  passwordCriteria.numbers = numbers;

  // confirm(select okay to include special characters)
  let specialchars = confirm("Select OK to include special characters in your password")
  passwordCriteria.specialchars = specialchars;
  
    //if none of the criteria are true, return error message
  if (lowercase === false && uppercase === false && numbers === false && specialchars === false) {
    alert("You must select at least one character type. Please try again")
  }

  // return password criteria object?
}

getpasswordOptions();

// Function to generate password with user input

function generatePassword() {

  // retrieve password criteria that were returned (call the function)

  // use array.prototype.concat() to make one giant array from the criteria the user has chosen:
  var potentialCharacters=[];

  // if user chose lowercase, concatenate the lowercase chars array onto potential chars array
if (getpasswordOptions.lowercase===true) {
    var potentialCharacters = potentialCharacters.concat(lowerCasedCharacters);
    console.log(potentialCharacters);
  }

  // // if user chose uppercase, concatenate the uppercase chars array onto potential chars array
  // if (passwordOptions.uppercase===true){
    var potentialCharacters = potentialCharacters.concat(upperCasedCharacters);
    console.log(potentialCharacters);
  // }

  // // if user chose numeric, concatenate the numeric chars array onto potential chars array
  // if (passwordOptions.numbers===true){
    var potentialCharacters = potentialCharacters.concat(numericCharacters);
    console.log(potentialCharacters);
  // }

  // // if user chose special chars, concatenate the special chars array onto potential chars array
  // if (passwordOptions.specialchars===true){
    var potentialCharacters = potentialCharacters.concat(specialCharacters);
    console.log(potentialCharacters);
  // }

  // at this point, potential chars is a large array of all potential chars that can go into users password
}

generatePassword();

// Function for getting a random element from an array
function getRandom(arr) {

  // generate random number to represent array index

    // loop as many times as characters chosen by user
  // for (let i = 0; i < numberOfCharacters; i++){
    // add random characters from potential charactes

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);