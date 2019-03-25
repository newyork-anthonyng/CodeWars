/*
Output
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

'use strict'

/*
var moveZeros = function(arr) {
  let zeroCounter = 0;

  arr = arr.filter(function(currentValue) {
    if(currentValue === 0) {
      zeroCounter++;
      return false;
    } else {
      return true;
    };
  });

  for(let i = 0, j = zeroCounter; i < j; i++) {
    arr.push(0);
  }

  return arr;
}
*/

var moveZeros = function(arr) {
  let nonZeros = arr.filter(function(currentValue) {return currentValue !== 0});
  let allZeros = arr.filter(function(currentValue) {return currentValue === 0});

  return nonZeros.concat(allZeros);
}


/*
  Comments: Learn to embrace all of the funky Array.prototype functions, such as
  map and filter.
  Best solution created two arrays; one that held onto all the non-zeros, and
  another one that held onto only zeros.
*/

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
