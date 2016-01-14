/*
Input

The input you are expecting is any random string you must then discern what are vowels and what are consonants and sum their total occurances in an object. However you may also receieve inputs that are not strings. If this happens, then you must return an object with the vowel and consonant total of 0 because the input was NOT a string. Refer to the Example section for a more visual representation of what inputs you may receive and the outputs expected. :)

Example:

Input: getCount('test')
Output: {vowels:1,consonants:3}

Input: getCount('tEst')
Output: {vowels:1,consonants:3}

Input getCount('    ')
Output: {vowels:0,consonants:0}

Input getCount()
Output: {vowels:0,consonants:0}
*/

'use strict';
/*
function getCount(words) {
  var myObject = {
    vowels: 0,
    consonants: 0
  };

  // check if it's a valid word
  if(typeof words !== 'string') {
    return myObject;
  }

  // check for vowels and consonants
  var wordArray = words.toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '').split('').forEach(function(currentValue) {
    switch(currentValue) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        myObject.vowels++;
        break;
      default:
        if(currentValue !== ' ') myObject.consonants++;
    }

  });

  return myObject;
}
*/

function getCount(words) {
  let myObject = {
    consonants: 0,
    vowels: 0
  };

  for(let i = 0, j = words.length; i < j; i++) {
    if('aeiou'.indexOf(words[i]) !== -1) myObject.vowels++;
    if('bcdfghjklmnpqrstvwxyz'.indexOf(words[i]) !== -1) myObject.consonants++;
  }

  return myObject;
};

/*
  Comments: The best solution was a lot cleaner than I thought it would be.
  I learned that even strings have a method, indexOf(); not only for arrays.
  Get more comfortable with thinking outside the box!
*/

console.log(getCount('test'));
console.log(getCount('     '));
console.log(getCount('how are you'));
console.log(getCount('how are you?'));
console.log(getCount(1));
