// Assignment code here

var generatePassword = function () {
  window.alert("Please answer each question")
  var passwordCriteria = window.prompt ("Choose the length of your password? (Enter a number between 8 to 128)");

  var passwordNumber = window.confirm ("Would you like numbers in your password?");
  var randomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var passwordUpper= window.confirm ("Would you like uppercase letters in your password?");
  var randomUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  var passwordLower = window.confirm ("Would you like lowercase letters in your password?");
  var randomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var passwordSpecial = window.confirm ("Would you like special characters in your password?");
  var randomSpecial = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  var randomResult = [];
  var passwordResult = [];


  if (passwordNumber) {
    randomResult = randomResult.concat(randomNumber)
  } 
  if (passwordUpper){
    randomResult = randomResult.concat(randomUpper)
  } 
  if(passwordLower){
    randomResult = randomResult.concat(randomLower)
  } 
  if(passwordSpecial){
    randomSpecial = randomResult.concat(randomSpecial)
  }

  for (var i = 0; i < passwordCriteria; i++) {    
    passwordResult.push(randomResult[Math.floor(Math.random() * randomResult.length)]); 
  }

  return passwordResult.join("");
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