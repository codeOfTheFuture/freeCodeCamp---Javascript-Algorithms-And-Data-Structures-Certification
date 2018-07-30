//Setup

var testObj = {
  12: 'Namath',
  16: 'Montana',
  19: 'Unitas'
};

// Only change code below this line;

var playerNumber = 16;  // Change this line
var player = testObj[playerNumber]; // Change this line
console.log(player);

// Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

// var myDog = {
//   dogName: 'Spike'
// };

// function dogNamePrefix(str){
//   var s = 'dog';
//   return s + str;
// }
// var someDog = dogNamePrefix('Name');

// console.log(myDog[someDog]);
