// // Setup

// function phoneticLookup(val){
//   var result = '';

// // Only Change code below this line

//   switch(val){
//     case 'alpha':
//       result = 'Adams';
//       break;
//     case 'bravo':
//       result = 'Boston';
//       break;
//     case 'charlie':
//       result = 'Chicago';
//       break;
//     case 'delta':
//       result = 'Denver';
//       break;
//     case 'echo':
//       result = 'Easy';
//       break;
//     case 'foxtrot':
//       result = 'Frank';
//       break;
//   }

//   // Only change code above this line
//   return result;
// }

//   // Change this value to test
//   phoneticLookup('charlie');

function phoneticLookup(val){
  var result = '';

  var lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank'
  }
  
  result = lookup[val];

  return result;
}

  console.log(phoneticLookup('echo'));