// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

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
// function getPasswordOptions() {

// }
// getPasswordOptions();

// Function to generate password with user input

function generatePassword() {

    // store value of each input in an object
    var passwordCriteria = {
      numberOfCharacters: "",
      lowercase: true,
      uppercase: true,
      numbers: true,
      specialchars: true,
    } // could put this object inside function

    // lowercase.option to initialise functions and prompt to get user input??


  // window.prompt to check no. characters
  let numberOfCharacters= Number(window.prompt("How many characters would you like your password to be?"));
  
  // could combine 8-128 range!!!!!!!!!!!!!

  // if no<8, return error message
  if (numberOfCharacters<8){
    window.prompt("Password must be at least 8 characters long. Please try again")
  }

  // if no>128, return error message (while loop)
  if (numberOfCharacters>128){
    window.prompt("Password cannot be longer than 128 characters long. Please try again")
  }

// solution for if they enter something other than a number
// if numberOfCharacters=== not a number > google this to work out what to do

  passwordCriteria.numberOfCharacters = numberOfCharacters;
  // console.log(passwordCriteria)

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

  //display final criteria
  console.log(passwordCriteria)

  //if none of the above are true, return error message
  if (lowercase === false && uppercase === false && numbers === false && specialchars === false) {
    alert("You must select at least one character type. Please try again")
  }

  // return password criteria object




  // creates an array of potential characters based on user inputs
  var potential = [];
  // console.log(potential)

      // if user choses lowercase, concatenate the lowercase chars array onto potential chars array

    if (passwordCriteria.lowercase){
      potential = potential.concat(lowerCasedCharacters);
      // console.log(potential)
    }

      // if user choses uppercase, concatenate the uppercase chars array onto potential chars array
    if (passwordCriteria.uppercase){
      potential = potential.concat(upperCasedCharacters);
      // console.log(potential)
    }
      
      // if user choses numbers, concatenate the numbers chars array onto potential chars array
    if (passwordCriteria.numbers){
      potential = potential.concat(numericCharacters);
      // console.log(potential)
    }

      // if user choses special chars, concatenate the special chars array onto potential chars array
    if (passwordCriteria.specialchars){
      potential = potential.concat(specialCharacters);
      // console.log(potential)
    }
    console.log(potential)
}



// Function for getting a random element from an array
function getRandom(length) {

  let password = ''
  let randomchar = ''
  for (var i = 0; i < passwordCriteria.numberOfCharacters; i++) {
    // generate random number to represent array index
    const randomIndex = Math.floor(Math.random() * generatePassword.potential.length);

    // get random item
    const randomchar = potential[arr]
    
    // may be useful: https://www.programiz.com/javascript/examples/generate-random-strings
    // password += `${arr[i]}` ASK TUTOR WHAT THIS DOES

    // concatenate item with other characters in password
    // console.log(password(passwordCriteria.numberOfCharacters))
}

// console.log(getRandom(passwordCriteria.numberOfCharacters))

// program to generate random strings

// declare all characters
// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }

var passwordlength = passwordCriteria.numberOfCharacters

console.log(generatePassword(passwordlength));

}

getRandom();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button (trigger function listening out for, function to be executed)
generateBtn.addEventListener('click', writePassword);