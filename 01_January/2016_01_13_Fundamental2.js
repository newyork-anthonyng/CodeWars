/*
You have to write two functions, padLeft and padRight that will fill the missing characters so the other system can import the data without any errors.

Registry Number   | Activity Code
00000000001337    | 1337000
60316817000448    | 6204000
*/

'use strict';

String.prototype.padLeft = function(ch, n) {
  let myString = '';

  while(myString.length < n - this.length) {
    myString += ch;
  }

  myString += this;

  return myString;
};

String.prototype.padRight = function(ch, n) {
  let myString = this;

  while(myString.length < n) {
    myString += ch;
  }

  return myString;
};

console.log('5'.padLeft('0', 5));
console.log('2'.padRight('.', 2));
