/*
 * Find the difference between the sum of
 * squares of the first n natural numbers, and the square of their sum
 *
 */

function differenceOfSquares(x) {
  var sumOfSquaredNumbers = 0;
  var squareOfSum = 0;

  for(var i = 1; i <= x; i++) {
    sumOfSquaredNumbers += (i * i);
    squareOfSum += i;
  }

  squareOfSum *= squareOfSum;

  return squareOfSum - sumOfSquaredNumbers;
}

console.log(differenceOfSquares(5));
console.log(differenceOfSquares(10));
console.log(differenceOfSquares(100));
