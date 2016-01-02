// Return the array/list passed into the function with all duplicates removed.
//
// The items in the returned array should be sorted alphabetically, with
// numbers before strings.
//
// The function should remove any null, undefined and invalid values from the
// array (in JS: all falsey values (NaN, false, undefined, null etc.) have
// to be removed). If the variable is not an array/list, the function should
// return a string “Not an array”.

'use strict'

/*
function arrayDeDup (array){
  if(!Array.isArray(array)) return 'Not an array';

  function mySort(a, b) {
    if(typeof a === 'number' && typeof b !== 'number') return -1;
    if(typeof b === 'number' && typeof a !== 'number') return 1;
    if(a === b) return 0;
    return a < b ? -1 : 1;
  }

  let sortedArray = array.sort(mySort);

  var previousDuplicated = false;
  for(var i = 1, j = sortedArray.length; i < j; i++) {
    // check if we have a previousDuplicated value
    if(sortedArray[i] === sortedArray[i - 1]) {
      sortedArray[i] = null;
      previousDuplicated = sortedArray[i - 1];
    }
    if(sortedArray[i] === previousDuplicated) {
      sortedArray[i] = null;
    }
  }

  return sortedArray.filter(function(value) {return value});
}
*/

/* Comments
  I failed at this Kata. The sorting was tripping me up, and I knew I was
  getting errors with my for-loop. When I was looping through my for-loop, it
  was missing values that there were more than two of. The best answer (see below)
  is a lot more elegant than mine.
*/
function arrayDeDup(array) {
  if(Array.isArray(array)) {
    return array.filter(function(currentValue, currentIndex) {
      return currentValue && array.lastIndexOf(currentValue) === currentIndex;
    }).sort();
  } else {
    return 'Not an array';
  }
}

console.log(arrayDeDup([1, 1, 1, 1, 1, 2, 3, 3]));
console.log(arrayDeDup([3, 'three', '3', 'three', 'three', 'three']));
