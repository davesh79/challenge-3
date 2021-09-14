var specialArr =['%', '#', '$','^','*','@'];
var numericArr =['1', '2', '3', '4','5','6','7','8','9','10','11','12'];
var capitalArr = ["A", "B", "C"];
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];

//all of the users characters wanted, store together in one big array
var usersOptions = [];



// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};



function generatePassword(){
  //to ask prompts for user
  //ask length ? 8-12
  var length = prompt("Length of password?? Min. 8 Max 16 ");

  if (length < 8) {
    console.log('TO little');
    return;
  };

  if (length > 12) {
    console.log('pword to large');
    return;
  };

//asking for users input
  var numericChar = confirm("do you want numbers in your password");
  var upperChar = confirm("do you want upper case letters in your password");
  var specialChar = confirm("do you want special char in your password");
  var lowerArr = confirm("do you want lower case letters in your password");
//condition to check users input
  if( numericChar === false && upperChar === false && specialChar === false && lowerArr === false){
    alert('must select one character type')
    return;
  };

if(numericChar){
  usersOptions = usersOptions.concat(numericArr);
}
if(upperChar){
  usersOptions = usersOptions.concat(capitalArr)
};

if(specialChar){
  usersOptions = usersOptions.concat(specialArr)
};

if(lowerArr){
  usersOptions = usersOptions.concat(lowerArr)
};


console.log(usersOptions)



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
