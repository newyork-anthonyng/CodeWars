/*
Write a function to multiply a number (x) by a given number (y) a certain
number of times (n). The results are to be returned in an array.

eg.

multiplyBy(2, 4, 6);
The output is: [8, 32, 128, 512, 2048, 8192]

NB: all arguments (x,y and n) will always be integers. Times (n) will always
be a positive integer.
*/

'use strict'

/*
function multiplyBy(x, y, n) {
  let myArray = [];
  myArray.push(x * y);

  for(let i = 1, j = n; i < j; i++) {
    myArray.push(myArray[i - 1] * y);
  }

  return myArray;
}
*/

function multiplyBy(x, y, n) {
  let myArray = [];

  while(n-- > 0) {
    x *= y;
    myArray.push(x);
  }
  return myArray;
}

/*
  Comments: Best answer uses a while loop, and changes the value of x on every
  iteration, as opposed to how I referenced the previous value of the array
*/

console.log(multiplyBy(2, 4, 6));
