// Calculate the sum of all the arguments passed to a function.
//
// Note: If any of the arguments is not a finite number the function should
// return false/False instead of the sum of the arguments.
//
// For example:
//
// sum(1,2,3,4)         should return 10
// sum(1, "two", 3)     should return false
// sum(1, 2, [3], NaN)  should return false

'use strict'

function sum() {
  let totals = 0;

  for(let i = 0, j = arguments.length; i < j; i++) {
    if(typeof arguments[i] != 'number') {
      return false;
    } else {
      totals += arguments[i];
    }
  }

  return totals;
}

console.log(sum(1,2,3,4));
console.log(sum(1, 'two', 3));
console.log(sum(1,2,[3], NaN));
