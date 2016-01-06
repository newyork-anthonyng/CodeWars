'use strict'
/*
function fixMe() {
  var numbers = [];

  for (let i = 0; i < 10; i++) {

    numbers[i] = function () {
      return i;
    };

  }

  return numbers;
}
*/

function fixMe() {
  var numbers = [];
  var i = 0;

  for(; i < 10; i++) {
    (function(num) {
      numbers[i] = function() {
        return num;
      }
    })(i);
  }

  return numbers;
}

var numbers = fixMe();
var i = 0;

for (; i < 10; i++) {
  console.log(numbers[i]());
}

/*
  Comments: This function had an issue with scoping. The for-loop had a function
  that was just referring to 10 in all of it's function calls. I could create
  a closure, but ECMA 6 has the "let" keyword which takes care of those scoping
  issues
*/
