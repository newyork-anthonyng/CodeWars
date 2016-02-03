/*
Create a function that returns the lowest product of 4 consecutive numbers in a given string of numbers.

This should only work is the number has 4 digits of more. If not, return "Number is too small".

Example

lowestProduct("123456789")--> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"
*/

'use strict';

function LowestProduct(input) {
  if(input.length < 4) return 'Number is too small';

  const inputArray = input.split('');
  let lowestTotal = inputArray[0] * inputArray[1] * inputArray[2] * inputArray[3];

  for(let i = 1; i < inputArray.length - 3; i++) {
    const newTotal = inputArray[i] * inputArray[i + 1] * inputArray[i + 2] * inputArray[i + 3];
    if(newTotal < lowestTotal) lowestTotal = newTotal;
  }

  return lowestTotal;
}

console.log(LowestProduct('35'));
console.log(LowestProduct("123456789"));
