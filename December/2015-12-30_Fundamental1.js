// Make a program that will take an int (x) and give you the summation of all
// numbers from 1 up to x included. If the given input is not an integer,
// return "Error 404".
//
// Examples:
//
// summation(25)==325
// summation(2.56)=="Error 404"

'use strict'

function summation(x) {

  // sum up all integers up to, and including, "number"
  function sumUpTo(number) {
    var mySum = 0;

    for(var i = 1, j = number; i <= j; i++) {
      mySum += i;
    }

    return mySum;
  };

  if(!Number.isInteger(x)) return 'Invalid Value';

  return sumUpTo(x);
}

console.log(summation(25));
console.log(summation(2.56));

/*
  ECMA 6 has a lot of new cool functions, such as Number.isInteger(argument)
  Some of the Best Answers showed a math equation, x + (x + 1)/2, that does
  the same job as the for-loop summation, but I'm no mathematician
*/
