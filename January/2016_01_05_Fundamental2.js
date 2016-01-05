/*
In this Kata you need to will need to write two methods.

Method 1

The first method takes in a valid int (positive or negative) and returns the following:

for any multiple of 3 the string "THREE",
for any multiple of 5 the string "FIVE",
for any multiple of both the string "BOTH",
for all other numbers the original int.
Method 2

The second method takes valid ints (positive or negative) and returns a list of the values that follow the above rules.

The first value may be greater than or less than the second and the list should increment/decrement appropriately

For example an input of 10,13 should generate a response of ['FIVE', 11, 'THREE', 13].
*/

'use strict'

function getNumber(number){
  if(typeof number !== 'number') return false;

  let divisibleByThree = number % 3 === 0;
  let divisibleByFive  = number % 5 === 0;

  if(divisibleByThree && divisibleByFive) {
    return 'BOTH';
  } else if(divisibleByThree) {
    return 'THREE';
  } else if(divisibleByFive) {
    return 'FIVE';
  } else {
    return number;
  }
};

function getNumberRange(first, last){
  let incrementor = Math.sign(last - first);
  let myArray = [];

  for(let i = first, j = last; i !== j + incrementor; i += incrementor) {
    myArray.push(getNumber(i));
  }

  return myArray;
};

/*
  Comments: Used Math.sign() for the first time. I've seen a similar function in
  Ruby before and thought, when would I ever need to use this function.
  Best solutions used an incrementor, similar to the one I used. I think it's
  cleaner than using and if-else statement for increasing and decreasing numbers
*/

// console.log(getNumber(3) === 'THREE');
// console.log(getNumber(10) === 'FIVE');
// console.log(getNumber(-1) === -1);
// console.log(getNumber('Hello') === false);

console.log(getNumberRange(1, 15));
console.log(getNumberRange(1, -15));
