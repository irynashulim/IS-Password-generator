// Assignment code here

var passwordLength;
var hasLower;
var hasUpper;
var hasNumber;
var hasSymbol;
var userChoice;
 
var getRandomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var getRandomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var getRandomUpper = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];  
var gerRandomSymbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
    passwordLength = prompt("Please enter how many characters for your password? btwn 8-128");
    if (!passwordLength) {
    alert("Needs value");
} else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Needs to be between 8 and 128 characters.");
} else {
    hasLower = confirm("Do you wanna use lower case?") 
    hasUpper = confirm("Do you wanna use upper case?")
    hasNumber = confirm("Do you wanna use numbers?")
    hasSymbol = confirm("Do you wanna use symbols?") 
};
//If nothing confirmed
if (!hasLower && !hasUpper && !hasNumber && !hasSymbol) {
    userChoice = window.alert("Please choose at list one criteria");
    return generatePassword();
//If all 4 confirmed
} else if (hasLower && hasUpper && hasNumber && hasSymbol) {
    userChoice = (getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol);
    console.log(userChoice);
//If 3 confirmed
} else if (hasLower && hasUpper && hasNumber) {
 userChoice = (getRandomLower, getRandomUpper, getRandomNumber);
} else if (hasLower && hasUpper && hasSymbol) {
    userChoice = (getRandomLower, getRandomUpper, getRandomSymbol);
} else if (hasLower && hasNumber && hasSymbol) {
    userChoice = (getRandomLower, getRandomNumber, getRandomSymbol);
} else if (hasUpper && hasNumber && hasSymbol) {
    userChoice = (getRandomUpper, getRandomNumber, getRandomSymbol);
//If 2 confirmed
} else if (hasLower && hasUpper) {
    userChoice = (getRandomLower, getRandomUpper);
} else if (hasNumber && hasSymbol) {
    userChoice = (getRandomNumber, getRandomSymbol);
} else if (hasLower && hasNumber) {
    userChoice = (getRandomLower, getRandomNumber);
} else if (hasLower && hasSymbol) {
    userChoice = (getRandomLower, getRandomSymbol);
} else if (hasUpper && hasNumber) {
    userChoice = (getRandomUpper, getRandomNumber);
} else if (hasUpper && hasSymbol) {
    userChoice = (getRandomUpper && getRandomSymbol);
//If 1 confirmed
} else if (hasLower) {
    userChoice = (getRandomLower);
} else if (hasUpper) {
    userChoice = (getRandomUpper);
} else if (hasNumber) {
    userChoice = (getRandomNumber);
} else if (hasSymbol) {
    userChoice = (getRandomSymbol);
};

//Password.length
var passwordBlank = [];



//Loop for random choice
for (var i = 0; i < passwordLength; i++) {
var allSelections = userChoice[Math.floor(Math.random() * userChoice.length)];
passwordBlank.push(allSelections);
} 
// Join and return the password 
var password = passwordBlank.join("");
console.log(password);
return password;
}