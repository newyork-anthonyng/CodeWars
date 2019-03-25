// Create a function that returns True if a given number is divisible by 4, otherwise it should return False.

function divisibleByFour (num) {
  return num % 4 === 0;
}

/*
  Comments: Best solution have less code
  return !(num % 4)
  I still like using the === operator to check for 0. It's more clear to the
  reader what is happening.
*/

console.log(divisibleByFour(4) === true);
console.log(divisibleByFour(8) === true);
console.log(divisibleByFour(9) === false);
console.log(divisibleByFour(-1) === false);
