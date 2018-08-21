// //Setup

// var myObj = {
//   gift: 'pony',
//   pet: 'kitten',
//   bed: 'sleigh'
// };

// function checkObj(checkProp){
//   // Your code here
//   var prop = '';

//   prop = myObj[checkProp];

//   return console.log((prop ? prop : 'false'));
// }

// //Test your code by modifying these values

// checkObj('gift');

var myObj = {
  gift: 'pony',
  pet: 'kitten',
  bed: 'sleigh'
};

function checkObj(checkProp){

  var prop = myObj[checkProp];

  return (myObj.hasOwnProperty(checkProp) ? prop : 'Not Found');
}

checkObj('gift');