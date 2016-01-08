/*
Create a function that calculates the sum of the two lowest numbers given an
array of 5 positive integers. No floats or empty arrays will be passed.
*/

'use strict'

function sumTwoSmallestNumbers(numbers) {
  let lowest1 = numbers[0];
  let lowest2 = numbers[1];

  for(let i = 2, j = numbers.length; i < j; i++) {
    if(numbers[i] < lowest1) {
      lowest2 = lowest1;
      lowest1 = numbers[i];
    } else if(numbers[i] < lowest2) {
      lowest2 = numbers[i];
    }
  }

  return lowest1 + lowest2;
}

let myArray = [2, 3, 5, 10, 5];
console.log(sumTwoSmallestNumbers(myArray));
