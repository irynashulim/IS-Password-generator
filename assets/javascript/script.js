// Assignment code here

var passwordLength;
var hasLower;
var hasUpper;
var hasNumber;
var hasSymbol;
var usedChoice;
 
//generator functions
//using https://www.w3schools.com/html/html_charset.asp

//Lower Case function
var getRandomLower = function() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
   };
   console.log(getRandomLower());

//Upper case function
var getRandomUpper = function() {
     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    };
    console.log(getRandomUpper());
// Numbers function
var getRandomNumber = function() {
     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    };
    console.log(getRandomNumber());
//Symbols function
var getRandomSymbol = function() {
      const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
     return symbols[Math.floor(Math.random() * symbols.length)];
    };
    console.log(getRandomSymbol());
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
    passwordLength = prompt("Please enter how many characters for your password? btwn 8-128");
    if (!passwordLength) {
    alert("Needs value");
} else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Needs to be between 8 and 128 characters.");
}
hasLower = confirm("Do you wanna use lower case?") 
hasUpper = confirm("Do you wanna use upper case?")
hasNumber = confirm("Do you wanna use numbers?")
hasSymbol = confirm("Do you wanna use symbols?")
    
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
