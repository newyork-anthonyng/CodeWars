/*
Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

The function takes two arguments:

The length of Bob's lap (larger than 0)
The length of Charles' lap (larger than 0)
The function should return an array containing exactly two numbers:

The first number is the number of laps that Bob has to run
The second number is the number of laps that Charles has to run
Examples

nbrOfLaps(5, 3); // returns [3, 5]
nbrOfLaps(4, 6); // returns [3, 2]
*/

'use strict'

function gcd(a, b) {
  if(b === 0) return a;

  return gcd(b, a % b);
}

/*
function nbrOfLaps(x, y) {
  let i = Math.max(x, y);

  while(true) {
    if(i % x === 0 && i % y === 0) {
      return [i / x, i / y];
    }

    i++;
  }
}
*/

function nbrOfLaps(x, y) {
  let myGcd = gcd(x, y);

  return [x / myGcd, y / myGcd];
}

/*
  Comments: I used a while-loop to get the GCD, and it was too slow to run the
  tests in time in the codewars platform. Use the gcd elegant algorithm! It's
  a lot faster.
*/

console.log(nbrOfLaps(5, 3));
console.log(nbrOfLaps(3, 2));
