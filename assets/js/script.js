// Assignment code here

function generatePassword () {
alert("Please answer each question")
var passwordCriteria = window.prompt ("Choose the length of your password? (8 to 128 characters)")
var passwordNumber = window.confirm ("Would you like numbers in you password?");
var passwardUpper= window.confirm ("Would you like uppercase letters in your password?");
var passwardLower = window.confirm ("Would you like lowercase letters in your password?");
var passwardSpecial = window.confirm ("Would you like special characters in you password?");

console.log()
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