/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of
those functions? We can assure, that only non-negative numbers are passed as
arguments. So you don't have to consider things like undefined, null, NaN,
negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()
*/

Math.round = function(number) {
  return number - parseInt(number) >= 0.5 ? parseInt(number) + 1 : parseInt(number);
}

Math.ceil = function(number) {
  return parseInt(number) + 1;
}

Math.floor = function(number) {
  return parseInt(number);
}

console.log(Math.round(0.6) === 1);
console.log(Math.ceil(0.8) === 1);
console.log(Math.ceil(1.6) === 2);
console.log(Math.floor(100.1) === 100);
