// Assignment Code
var generateBtn = document.querySelector("#generate");


// Variables //
var specialChar = ["!", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", ",", "_", "`", "{", "|", "}", "~", "]"];
var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Actions //
var lowercaseRandom = Math.floor(Math.random() * 26);
var uppercaseRandom = Math.floor(Math.random() * 26);
var specialCharRandom = Math.floor(Math.random() * 30);

function generatePassword() {
  var passwordLength = prompt("How long do you want your password to be? (Numeric values only; between 8-128 characters)."); //8-128 characters
  var criteria1 = confirm("Do you want it to have lowercase letters?");
  var criteria2 = confirm("Do you want it to have uppercase letters?");
  var criteria3 = confirm("Do you want it to have numbers?");
  var criteria4 = confirm("Do you want it to have special characters?");
  // This is an anchor variable - an imaginary placeholder for data because the loop destroys its data everytime it goes on a loop //
  var result = "";
  var optionsArray = [] // randomize which array we're gonna get our options from

  // These determine which optionsArray is gonna organize based on user input
  if (criteria1 === true) {
    optionsArray.push(lowercaseAlphabet)
  }
  if (criteria2 === true) {
    optionsArray.push(uppercaseAlphabet)
  }
  if (criteria3 === true) {
    optionsArray.push(numeric)
  }
  if (criteria4 === true) {
    optionsArray.push(specialChar)
  }
  // This for loop handles the logic from choosing characters in the randomized array
  for (i = 0; i < passwordLength; i++) {
    console.log(optionsArray)
    //option 1 randomly chooses the array from which we'll be choosing the character from
    var option1 = Math.floor(Math.random() * optionsArray.length)
    console.log(optionsArray[option1])
    // This is where we randomly choose a random character from the random array we chose from earlier
    var option2 = Math.floor(Math.random() * optionsArray[option1].length)
    // This is where we add the character to the result
    result += optionsArray[option1][option2]
  }
  //Once our for loop is finished, the result is a string of random characters chosen by our for loop
  // We're using return to give the value of our result to the variable password
  return result
}

// Write password to the #password input
function writePassword() {
  //this is where our function returns our information to password
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);