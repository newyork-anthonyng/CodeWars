// Create an array remove function, that removes an element from given array

'use strict'

Array.prototype.remove = function remove(index) {
  if(typeof index !== 'number' || index < 0 || index > this.length) return;

  this.splice(index, 1);
}

let myArray = [1, 2, 3];
myArray.remove(1);
console.log(myArray);

/*
  Comments: I failed at this one. This was my first time extending a class.
  I learned about adding methods to an existing class by manipulating their
  prototype key.
*/
