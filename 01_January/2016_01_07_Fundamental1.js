/*
Implement a method that accepts 3 integer values a, b, c. The method should
return true if a triangle can be built with the sides of given length and false
in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

'use strict'

function isTriangle(a, b, c) {
  // any two sides must be greater than the third side
  let test1 = a + b > c;
  let test2 = a + c > b;
  let test3 = b + c > a;

  return test1 && test2 && test3;
}

/*
  Comments: Learned about triangles. Any two sides of the triangle must be
  greater than the third side.
*/


console.log(isTriangle(1, 2, 2) === true);
console.log(isTriangle(7, 2, 2) === false);
