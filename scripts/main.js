function handValue(hand) {
  let value = 0
  for (var i = 0; i < hand.length; i++) {
      if (hand[i] == "2" || hand[i] == "3" || hand[i] == "4" || hand[i] == "5" || hand[i] == "6" || hand[i] == "7" || hand[i] == "8" || hand[i] == "9" || hand[i] == "10") {
      value += parseInt(hand[i]);
    } else if (hand[i] == "J" || hand[i] == "Q" || hand[i] == "K") {
      value += 10;
    }
 }
  for (i = 0; i < hand.length; i++) {
      if (hand[i] == "A" && value < 11) {
      value += 11;
    } else if (hand[i] == "A" && value > 11) {
      value += 1;
    }
 }
  return value
}


//
// "A" logic is messed up, got answer from Oakley (SEE BELOW)
//
//   function handValue (hand) {
//       var total = 0;
//
//       //Total all cards other than aces
//       for(var i = 0; i < hand.length; i++) {
//           if(hand[i] == "K" || hand[i] == "Q" || hand[i] == "J") {
//               total += 10;
//           } else if (hand[i] == "A") {
//               continue;
//           } else {
//               var iint = parseInt(hand[i]);
//               if(iint < 2 || iint > 10) {
//                   console.log("Invalid card value: " + hand[i]);
//                   return;
//               } else {
//                   total += iint;
//               }
//           }
//       }
//
//       //Total up aces afterwords
//       for(var i = 0; i < hand.length; i++) {
//           if(hand[i] == "A") {
//               if(total + 1 <= 21 && total + 11 > 21) {
//                   total += 1;
//               } else if(total + 11 < 21) {
//                   total += 11;
//               } else {
//                   total += 1;
//               }
//           }
//       }
//       //console.log(total);
//       return total;
//   }
