// Assignment code here

var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};


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
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var length = +lengthEl.value;
    var hasLower = lowercaseEl.confirm;
    var hasUpper = uppercaseEl.confirm;
    var hasNumber = numberEl.confirm;
    var hasSymbol = symbolEl.confirm;
  var password = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol) {
    var generatedPassword = '';
    var typesCount = lower + upper + number + symbol;
    var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
