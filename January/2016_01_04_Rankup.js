/*
To solve this Kata, complete the function, calculateHypotenuse(a,b), which will return the length of the hyptenuse for a right angled triangle with the other two sides having a length equal to the inputs. More details:

The returned value should be a number rounded to three decimal places
An error should be thrown if an invalid input is provided (inputs should both be numbers that are above zero)
calculateHypotenuse(1,1); // returns 1.414
calculateHypotenuse(3,4); // returns 5
calculateHypotenuse(-2,1); // throws error
calculateHypotenuse("one", "two"); // throws error
*/

'use strict'

function calculateHypotenuse(a, b) {
  let isNumber = typeof a === 'number' && typeof b === 'number';
  let isPositive = a > 0 && b > 0;
  if(!isNumber || !isPositive) throw 'error: invalid input';

  let myAnswer = Math.sqrt(a * a + b * b);
  return Math.round(myAnswer * 1000) / 1000;
}

/*
  Comments: Learned how to throw errors.
*/

console.log(calculateHypotenuse(1, 1));
console.log(calculateHypotenuse(3, 4));

// test errors
console.log(calculateHypotenuse(-2, 1));
console.log(calculateHypotenuse('one', 'two'));
console.log(calculateHypotenuse('one', 1));
