var count = 0;

function cc(card){
  //Only Change code below this line

  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }
   console.log(count + ((count > 0) ? ' Bet' : ' Hold'));

  //Only Change code above this line

}

  // Add/remove calls to test your function.
  // Note: Only the last will display
cc(2); cc(3); cc(4); cc(5); cc(6);