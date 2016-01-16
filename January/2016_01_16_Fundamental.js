/*Instructions
Output
Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return undefined. You can assume that all array elements will be positive integers.

Examples:
isSquare([1, 4, 9, 16]);
//returns true

isSquare([3, 4, 7, 9]);
//returns false

isSquare([]);
//returns undefined
*/

'use strict';

var isSquare = function(arr){

  if(arr.length === 0) return undefined;

  function numberIsSquare(num) {
    return Math.sqrt(num) === parseInt(Math.sqrt(num));
  }


  for(let i = 0, j = arr.length; i < j; i++) {
    if(!numberIsSquare(arr[i])) return false;
  }

  return true;
}

console.log(isSquare([1,4,9,16]) === true);
console.log(isSquare([]) == undefined);
console.log(isSquare([3,4,7,9]) === false);
