//Setup

var myObj = {
  gift: 'pony',
  pet: 'kitten',
  bed: 'sleigh'
};

function checkObj(checkProp){
  // Your code here
  var prop = '';

  prop = myObj[checkProp];

  return console.log((prop ? prop : 'false'));
}

//Test your code by modifying these values

checkObj('gift');
