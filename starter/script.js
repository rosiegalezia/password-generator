// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// global variable to ensure at least one of each of the character types is included in password
var guaranteedCharacters = [];

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

// Function to generate password based on user input
function generatePassword() {

    // store value of each input in an object
    var passwordCriteria = {
      numberOfCharacters: "",
      lowercase: true,
      uppercase: true,
      numbers: true,
      specialchars: true,
    } 

  // window.prompt to check desired no. of characters
  let numberOfCharacters= Number(window.prompt("How many characters would you like your password to be?"));

  // if no<8 or >128, return error message
  if (numberOfCharacters<8 || numberOfCharacters>128){
    window.prompt("Password must be between 8 and 128 characters long. Please try again")
  }

  // solution for if they enter something other than a number
  if (isNaN(numberOfCharacters)) {
    window.prompt("Please enter a numberic value between 8 and 128")
  }
// if numberOfCharacters=== not a number > google this to work out what to do

  passwordCriteria.numberOfCharacters = numberOfCharacters;

  // if (8<numberOfCharacters<128) && (isNaN(numberOfCharacters)===false)

  // confirm statement to get user input for lowercase characters
  let lowercase = confirm("Select OK to include lowercase letters in your password")
  passwordCriteria.lowercase = lowercase;
  
  // confirm statement to get user input for uppercase characters
  let uppercase = confirm("Select OK to include uppercase letters in your password")
  passwordCriteria.uppercase = uppercase;

  // confirm statement to get user input for numeric characters
  let numbers = confirm("Select OK to include numbers in your password")
  passwordCriteria.numbers = numbers;

  // confirm statement to get user input for special characters
  let specialchars = confirm("Select OK to include special characters in your password")
  passwordCriteria.specialchars = specialchars;

  //display final criteria
  console.log(passwordCriteria)

  //if none of the above are true, return error message
  if (lowercase === false && uppercase === false && numbers === false && specialchars === false) {
    alert("You must select at least one character type. Please try again")
  }

  // creates an array of potential characters based on user inputs
  var potential = [];

    if (passwordCriteria.lowercase){
      // add the lowercase array to the array of potential characters if user selects this
      potential = potential.concat(lowerCasedCharacters);

      // run the get random function to guarantee a lowercase character
      getRandom(lowerCasedCharacters)
    } 

    if (passwordCriteria.uppercase){
      // add the uppercase array to the array of potential characters if user selects this
      potential = potential.concat(upperCasedCharacters);

      // run the get random function to guarantee an uppercase character
      getRandom(upperCasedCharacters)
    }
      
    if (passwordCriteria.numbers){
      // add the numeric array to the array of potential characters if user selects this
      potential = potential.concat(numericCharacters);

      // run the get random function to guarantee a numeric character
      getRandom(numericCharacters)
    }

    if (passwordCriteria.specialchars){
      // add the special characters array to the array of potential characters if user selects this
      potential = potential.concat(specialCharacters);

      // run the get random function to guarantee a special character
      getRandom(specialCharacters)
    }

    // display the array of potential characters based on user inputs in console
    console.log(potential)

    // check that the number of remaining characters is calculated correctly
    console.log(numberOfCharacters-guaranteedCharacters.length)
    var passwordLength = numberOfCharacters-guaranteedCharacters.length


    // randomly generate the remaining characters until password length matches that requested by user
    for (var i = 0; i < passwordLength; i++) {
      // run the get random function on the 'potential' array
      getRandom(potential)
    }

    return guaranteedCharacters
}

// Function for getting a random element from an array (relevant array can be specified later)
function getRandom(array) {

  // initalise random character variable
  let randomchar = ''

    // generate random number to represent array index
    const randomIndex = Math.floor(Math.random() * array.length);

    // get random item from the assigned array
    randomchar = array[randomIndex]
    
// adds character to the password string
 guaranteedCharacters = guaranteedCharacters + randomchar

 // displays password string in console
console.log(guaranteedCharacters)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button (trigger function listening out for, function to be executed)
generateBtn.addEventListener('click', writePassword);