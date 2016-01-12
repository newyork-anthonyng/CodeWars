/*
isNaN doesn't work very well. We want us to tell us whether the value or object we're dealing with is a number or not. Instead, it tells us if the value is equal to the NaN value it has on-record.

So let's make a proper function, called isAN, for is A Number. If you pass it a value, it will return true if a value is a valid primitive number or Number object, and false if not.
*/

'use strict';

function isAN(value) {
  return typeof value === 'number' ||
            (value instanceof Number && !isNaN(value));
}

console.log(isAN(new Number(1)));
