// Assignment Code
var generateBtn = document.querySelector("#generate");
//variable to save prompt response

//Define generate password function 
function generatePassword() {
  // console.log( "You clicked the button")
  var howManyChar = prompt("How many characters would you like?")
  if ((howManyChar > 128) || (howManyChar < 8)) {
    alert("Oops! Refresh the page and try again");
    let num;

do {
  let tryAgain = prompt("How many characters would you like?", 0);
} while (tryAgain < 128 && tryAgain> 8 && num);
    //return function    //loop the erroroneous people to the top of this variable
  }
  else {

    confirm("You would like " + howManyChar + " characters.")
  }
  //Password variables
  var Symbols = confirm("Would you like special characters?")
  let strS = "!#$%&'()*+,-./:;<=>?@[^_`{|}~/]"
  if (Symbols === false) {
    let nostrS = ""
  }

  var Num = confirm("Would you like to include numbers?")
  let strN = "0123456789"
  if (Num === false) {
    nostrN = ""
  }
  let ySyN = strS.concat(strN);

  if ((Symbols == true) && (Num == true)) {
    // console.log(ySyN) concant worked
  } var upper = confirm("Would you like to include uppercase letters?")
  let strU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (upper === false) {
    nostrU = ""
  }
  var lower = confirm("Would you like to include lowercase letters?")
  let strL = "abcdefghijklmnopqrstuvwxyz"

  if (lower === false) {
    nostrL = ""
  }
  // Selections
  // All are selected, 
  if ((Symbols == true) && (Num == true) && (upper == true) && (lower == true)) {
    let ySyNyUyL = strS.concat(strN, strU, strL);
    var returnValue = "";
    var length = parseInt(howManyChar, 10);
    for (var i = 0; i < (length); ++i) {
      returnValue += ySyNyUyL.charAt(Math.floor(Math.random() * ySyNyUyL.length));
    } return returnValue;
  }
  else if ((Symbols == true) && (Num == true) && (upper == true) && (lower == false)) {
    let ySyNyUnL = strS.concat(strN, strU, nostrL);
    var returnValue = "";
    var length = parseInt(howManyChar, 10);
    for (var i = 0; i < (length); ++i) {
      returnValue += ySyNyUnL.charAt(Math.floor(Math.random() * ySyNyUnL.length));
    }
    return returnValue;
  }
  else if ((Symbols == true) && (Num == true) && (upper == false) && (lower == false)){
    let y1 = strS.concat(strN, nostrU, nostrL);
  var returnValue = "";
  var length = parseInt(howManyChar, 10);
  for (var i = 0; i < (length); ++i) {
    returnValue += y1.charAt(Math.floor(Math.random() * y1.length));
  }
  return returnValue;
}
 else if((Symbols == true) && (Num == false) && (upper==false) && (lower==false)){
  let y1 = strS.concat(nostrN, nostrU, nostrL);
  var returnValue = "";
  var length = parseInt(howManyChar, 10);
  for (var i = 0; i < (length); ++i) {
    returnValue += y1.charAt(Math.floor(Math.random() * y1.length));
  }
  return returnValue;
}
else if((Symbols == true) && (Num == false) && (upper==true) && (lower==false)){
 let y1 = strS.concat(strU);
 var returnValue = "";
 var length = parseInt(howManyChar, 10);
 for (var i = 0; i < (length); ++i) {
   returnValue += y1.charAt(Math.floor(Math.random() * y1.length));
 }
 return returnValue;
}
else if((Symbols == false) && (Num == true) && (upper==true) && (lower==true)){
  let y1 = strN.concat(strU, strL);
  var returnValue = "";
  var length = parseInt(howManyChar, 10);
  for (var i = 0; i < (length); ++i) {
    returnValue += y1.charAt(Math.floor(Math.random() * y1.length));
  }
  return returnValue;
}
 else if((Symbols == false) && (Num == true) && (upper==false) && (lower==false)){
  let y1 = strN;
  var returnValue = "";
  var length = parseInt(howManyChar, 10);
  for (var i = 0; i < (length); ++i) {
    returnValue += y1.charAt(Math.floor(Math.random() * y1.length));
  }
  return returnValue;
}
 else if((Symbols == false) && (Num == true) && (upper==false) && (lower==true)){
  let y1 = strN.concat(strL);
  var returnValue = "";
  var length = parseInt(howManyChar, 10);
  for (var i = 0; i < (length); ++i) {
    returnValue += y1.charAt(Math.floor(Math.random() * y1.length));
  }
  return returnValue;
 }
 else if((Symbols == false) && (Num == false) && (upper==true) && (lower==false)){
  let y1 = strU;
  var returnValue = "";
  var length = parseInt(howManyChar, 10);
  for (var i = 0; i < (length); ++i) {
    returnValue += y1.charAt(Math.floor(Math.random() * y1.length));
  }
  return returnValue;
 } 
 else if((Symbols == false) && (Num == true) && (upper==true) && (lower==false)){
  let y1 = strU.concat(strN);  var returnValue = "";
  var length = parseInt(howManyChar, 10);
  for (var i = 0; i < (length); ++i) {
    returnValue += y1.charAt(Math.floor(Math.random() * y1.length));
  }
  return returnValue;
}
  else if((Symbols == false) && (Num == true) && (upper==true) && (lower==true)){
  let y1 = strU.concat(strN, strL);  var returnValue = "";
  var length = parseInt(howManyChar, 10);
  for (var i = 0; i < (length); ++i) {
    returnValue += y1.charAt(Math.floor(Math.random() * y1.length));
  }
  return returnValue;
 } else if((Symbols == false) && (Num == false) && (upper==false) && (lower==true)){
  let y1 = strL;  var returnValue = "";
  var length = parseInt(howManyChar, 10);
  for (var i = 0; i < (length); ++i) {
    returnValue += y1.charAt(Math.floor(Math.random() * y1.length));
  }
 }
 else if((Symbols == false) && (Num == false) && (upper==true) && (lower==true)){

    let y1 = strL.concat(strU);  var returnValue = "";
    var length = parseInt(howManyChar, 10);
    for (var i = 0; i < (length); ++i) {
      returnValue += y1.charAt(Math.floor(Math.random() * y1.length));
    }
   }
  else if((Symbols == false) && (Num == true) && (upper==true) && (lower==true)){
    let y1 = strL.concat(strN, strU);  var returnValue = "";
    var length = parseInt(howManyChar, 10);
    for (var i = 0; i < (length); ++i) {
      returnValue += y1.charAt(Math.floor(Math.random() * y1.length));
    }
   }
    else ((Symbols == false) && (Num == false) && (upper==false) && (lower==false))
      alert("You must select symbols, numbers, upper case characters, or lower case characters to generate a passcode");
        
  }
  // var length = howManyChar.length;
  // var returnValue = "";
  // var length = parseInt(howManyChar, 10);
  // for (var i = 0; i < (length); ++i) {
  //   returnValue += ySyNyUyL.charAt(Math.floor(Math.random() * ySyNyUyL.length));
  // }
  // return returnValue;

  // }
  // }
  // //confirms that the button clicks works. The button now produces undefined instead of nothing.
  // //1. prompt the user for the password criteria 
  // //2.validate inputs
  // //  if they type in something wrong, write an error alert.
  // //3. Generate password based on criteria 
  // //4. Display the generate password on the page

  // // return "Generated password goes here" //confirms we want the button to return something and I can confirm the structure.
  // // }

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    return password
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
