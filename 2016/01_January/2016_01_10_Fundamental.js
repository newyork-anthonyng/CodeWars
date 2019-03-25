/*
After calling the function findSum() with any number of non-negative integer
arguments, it should return the sum of all those arguments. If no arguments
are given, the function should return 0, if negative arguments are given,
it should return -1.

eg

findSum(1,2,3,4); // returns 10
findSum(1,-2);    // returns -1
findSum();        // returns 0
*/

'use strict';

function findSum() {
  if(arguments.length === 0) return 0;

  let mySum = 0;

  for(let i = 0, j = arguments.length; i < j; i++) {
    if(arguments[i] < 0) return -1;

    mySum += arguments[i];
  }

  return mySum;
}

console.log(findSum(1,2,3,4) === 10);
console.log(findSum() === 0);
console.log(findSum(-1, 2, 3) === -1);
