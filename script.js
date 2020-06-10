var generateBtn = document.querySelector("#generate");

var specialChar = ["!", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", ",", "_", "`", "{", "|", "}", "~", "]"];
var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var lowercaseRandom = Math.floor(Math.random() * 26);
var uppercaseRandom = Math.floor(Math.random() * 26);
var specialCharRandom = Math.floor(Math.random() * 30);

function generatePassword() {
  var passwordLength = prompt("How long do you want your password to be? (Numeric values only; between 8-128 characters)."); //8-128 characters
  if (passwordLength > 7 && passwordLength  < 128) {
  var criteria1 = confirm("Do you want it to have lowercase letters?");
  var criteria2 = confirm("Do you want it to have uppercase letters?");
  var criteria3 = confirm("Do you want it to have numbers?");
  var criteria4 = confirm("Do you want it to have special characters?");
}
else {
    alert("Characters need to be between 8-128");
}

if (criteria1 == false && criteria2 == false && criteria3 == false && criteria4 == false ) {
    alert("You need to pick at least one characteristic.");
}

  var result = "";
  var optionsArray = []

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

  for (i = 0; i < passwordLength; i++) {
    console.log(optionsArray)
    var option1 = Math.floor(Math.random() * optionsArray.length)
    console.log(optionsArray[option1])
    var option2 = Math.floor(Math.random() * optionsArray[option1].length)
    result += optionsArray[option1][option2]
  }
  return result
}

function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);