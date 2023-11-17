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
function getPasswordOptions() {

  // window.prompt to check no. characters
  let numberOfCharacters= Number(window.prompt("How many characters would you like your password to be?"));
  // if no<8, return error message
  // if no>128, return error message (while loop)


  // confirm(select okay to include lowercase letters)
  let lowercase = confirm("Select OK to include lowercase letters in your password")
  // confirm(select okay to include uppercase letters)
  let uppercase = confirm("Select OK to include uppercase letters in your password")
  // confirm(select okay to include numbers)
  let numbers = confirm("Select OK to include numbers in your password")
  // confirm(select okay to include special characters)
  let specialchars = confirm("Select OK to include special characters in your password")
  

  //if none of the above are true, return error message

  // store value of each input in an object
  passwordCriteria = {
    numberOfCharacters: ;
    lowercase: ;
    uppercase: ;
    numbers: ;
    specialchars: ;
  }
  // return password criteria object
}

// Function for getting a random element from an array
function getRandom(arr) {

  // generate random number to represent array index

}

// Function to generate password with user input
function generatePassword() {
  // retrieve password criteria that were returned (call the function)

  // could maybe use array.prototype.concat() to make one giant array from the criteria the user has chosen:

  // if user chose lowercase, concatenate the lowercase chars array onto potential chars array
  // if user chose uppercase, concatenate the uppercase chars array onto potential chars array
  // if user chose numeric, concatenate the numeric chars array onto potential chars array
  // if user chose special chars, concatenate the special chars array onto potential chars array

  // at this point, potential chars is a large array of all potential chars that can go into users password

  // loop as many times as characters chosen by user
  // for (let i = 0; i < numberOfCharacters; i++){
    // add random characters from potential charactes
  }

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