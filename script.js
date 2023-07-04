// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ADDED CODE BELOW:

// creating a function that can be used to generate password
function generatePassword() {
  // declare variable for password
  var password = "";

  // determine length of password using the prompt() method
  var length = prompt("Enter the desired length of the password:");
  while (Number(length) < 8 || Number(length) > 128) {
    length = prompt("Password must be at least 8 characters but no more than 128 characters! Try Again!")
  }

  // confirming password criteria using the confirm() method
  var lower = confirm("Do you want to include lower case letter?");
  var upper = confirm("Do you want to include upper case letter?");
  var numbers = confirm("Do you want to include numbers?");
  var specialChar = confirm("Do you want to include special characters?");

  // building string of potential password characters based on user criteria
  var characters = "";
  if (lower) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  } 
  if (upper) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbers) {
    characters += "0123456789";
  }
  if (specialChar) {
    characters += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  if (characters === "") {
    // using the alert() method to validate that minimum password criteria is met
    alert("You must select at least 1 of the password criteria to proceed. Try Again!");
    // if not, re-generate password
    return generatePassword();
  }

  // generate password using the string of characters that we compile
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  // returning password to the user
  return password;
}