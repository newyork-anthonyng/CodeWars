/*
Create a function that rounds a number to 2 decimal places and returns it as a string.

For example:

Round(1.56888)==>"1.57"
Round(0.3333)==> "0.33"
*/

'use strict';

// function Round(n){
//   return String(Math.round(n * 100) / 100);
// }

function Round(n) {
  return n.toFixed(2);
}

/*
  Comments: Learned about the Number.prototype.toFixed() method, which returns
  a string representation of a number, rounded to the given decimal place.
*/

console.log(Round(0.3333) === '0.33');
console.log(Round(1.5688) ==='1.57');
