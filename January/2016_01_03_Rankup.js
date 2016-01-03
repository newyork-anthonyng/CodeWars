/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parenthese!
*/

'use strict'
/*
function createPhoneNumber(numbers){
  return numbers.reduce(function(previousValue, currentValue, currentIndex) {
            switch(currentIndex) {
              case 0:
                return '(' + currentValue;
                break;
              case 2:
                return previousValue + currentValue + ') ';
                break;
              case 5:
                return previousValue + currentValue + '-';
                break;
              case 1:
              case 3:
              case 4:
              case 6:
              case 7:
              case 8:
              case 9:
                return previousValue + currentValue;
                break;
            }
          }, '');
}
*/
function createPhoneNumber(numbers) {
  var phoneNumber = numbers.join('');
  return '(' + phoneNumber.substring(0, 3) + ') ' +
         phoneNumber.substring(3, 6) + '-' + phoneNumber.substring(6);
}

/*
  Comments: The refactored best answer code is a lot cleaner than my switch statement
*/

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
