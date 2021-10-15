// Assignment Code
var generateBtn = document.querySelector("#generate");
//variable to save prompt response

// Define lower case8, upper case, special characters
const specialCase = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ";", "<", "=", ">", "?", "@", "[", "_", "`", "{", "|", "}", "~", "]", "/", "^"];
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(specialCase)
console.log(specialCase.length)
console.log(alphabet)


//Define generate password function 
function generatePassword() {
  // console.log( "You clicked the button")
  var howManyChar = prompt("How many characters would you like?")
  if ((howManyChar > 128) || (howManyChar < 8)) {
    alert("Oops! Refresh the page ans try again");
  }
  //loop the erroroneous people to the top of this variable


  else {
   
    confirm("You would like " + howManyChar + " characters.")
    var Symbols = confirm("Would you like special characters?")
    if (Symbols === true) {
      var symbolsSet = "!#$%&'()*+,-./:;<=>?@[^_`{|}~/]"
      // console.log(symbolsSet) confirmed that the variable symbolset was successfully made
   
    } else {
      symbolsSet = ""
    }
    
    var Num = confirm("Would you like to include numbers?")
    if (Num === true) {
      var numSet = "0123456789"
      // console.log(symbolsSet) confirmed that the variable symbolset was successfully made
    } else {
      numSet = ""
    }

    var upper = confirm("Would you like to include uppercase letters?")
    if (upper === true) {
      var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      // console.log(symbolsSet) confirmed that the variable symbolset was successfully made
    } else {
      upperSet = ""
    }
    var lower = confirm("Would you like to include lowercase letters?")
    if (lower === true) {
      var lowerSet = "abcdefghijklmnopqrstuvwxyz"
      // console.log(symbolsSet) confirmed that the variable symbolset was successfully made
    } else {
      lowerSet = ""
    }
    returnValue = "";
    charset = "ASDFGFDS^%$#$@T%^$Y%$"
for (var i = 0, n = howManyChar; i < 0 ; ++i) {
returnValue += charset.charAt(Math.floor(Math.random() * n));
}
return returnValue;
    }
}

//confirms that the button clicks works. The button now produces undefined instead of nothing.
//1. prompt the user for the password criteria 
//2.validate inputs
//  if they type in something wrong, write an error alert.
//3. Generate password based on criteria 
//4. Display the generate password on the page

// return "Generated password goes here" //confirms we want the button to return something and I can confirm the structure.
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```*/
