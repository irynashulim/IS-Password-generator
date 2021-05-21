// Assignment code here

//generator functions
//using https://www.w3schools.com/html/html_charset.asp

//Lower Case function
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
   }
//Upper case function
 function getRandomUpper() {
     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
// Numbers function
function getRandomNumber() {
     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
//Symbols function
function getRandomSymbol() {
      const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
     return symbols[Math.floor(Math.random() * symbols.length)];
    }
  
  
    console.log(getRandomSymbol());
   
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
