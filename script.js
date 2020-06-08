// Assignment Code
var generateBtn = document.querySelector("#generate");     //do not modify

//user variables
var numeric = [0,1,2,3,4,5,6,7,8,9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
var alphaLw = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var passwordLength;
var numericVerify;
var specialVerify;
var alphaLwVerify;
var alphaUpVerify;
var characters=[];

function criteria(){

numericVerify = window.confirm("Will this contain numbers?");
specialVerify = window.confirm("Will this contain special characters?");
alphaLwVerify = window.confirm("Will this contain Uppercase letters?");
alphaUpVerify = window.confirm("Will this contain Lowercase letters?");

}


function generatePassword(){

// Asks for user input
passwordLength = parseInt(prompt("Choose the length of your password. Must be between 8 and 128 characters."));

console.log(passwordLength);

if (passwordLength >= 8 && passwordLength <= 128) {
  test = "true, the number meets the criteria";
  console.log(test);
  console.log(passwordLength);
  
  criteria();

} 

else {
  test = "false. the number does not meet the criteria";
  console.log(test);
  console.log(passwordLength);

  passwordLength = parseInt(prompt("Please try again. Must be between 8 and 128 characters."));
}

var passwordCriteria = (numericVerify +","+ specialVerify +","+ alphaLwVerify +","+ alphaUpVerify);


console.log (passwordCriteria);
console.log(passwordLength);
console.log(numericVerify);
console.log(specialVerify);
console.log(alphaLwVerify);
console.log(alphaUpVerify);

//Four variables used
if (numericVerify && specialVerify && alphaLwVerify && alphaUpVerify){
  characters = numeric.concat (special, alphaLw, alphaUp);
}
//Three Variables used
else if (specialVerify && alphaLwVerify && alphaUpVerify) {
  characters = special.concat(alphaLw,alphaUp);
}
else if (numericVerify && alphaLwVerify && alphaUpVerify) {
  characters = numeric.concat(alphaLw,alphaUp);
}
else if (numericVerify && specialVerify && alphaUpVerify) {
  characters = numeric.concat(special,alphaUp);
}
else if (numericVerify && specialVerify && alphaLwVerify) {
  characters = numeric.concat(special,alphaLw);
}

//Two Variables used
else if (specialVerify && alphaLwVerify){
  characters = special.concat(alphaLw);
}
else if (numericVerify && alphaUpVerify){
  characters = numeric.concat(alphaUp);
}
else if (alphaLwVerify && alphaUpVerify){
  characters = alphaLw.concat(alphaUp);
}
else if (numericVerify && specialVerify){
  characters = numeric.concat(special);
}
else if (specialVerify && alphaUpVerify){
  characters = special.concat(alphaUp);
}
else if (numericVerify && alphaLwVerify){
  characters = numeric.concat(alphaLw);
}

//One Variable used
else if (numericVerify){
characters = numeric;
}
else if (specialVerify){
characters = special;
}
else if (alphaLwVerify){
characters = alphaLw;
}
else if (alphaUpVerify){
characters = alphaUp;
}

var password = [];

for (var i = 0; i < passwordLength; i++) {
  console.log(i);
  var choices = characters[Math.floor(Math.random() * characters.length)];
  console.log(choices)
}
console.log(choices);
console.log(characters);
return choices;


};

// Write password to the #password input
function writePassword() {                                //do not modify                      
  var password = generatePassword();                      //do not modify
  var passwordText = document.querySelector("#password"); //do not modify

  passwordText.value = password;                          //do not modify

}                                                         //do not modify

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);     //do not modify
