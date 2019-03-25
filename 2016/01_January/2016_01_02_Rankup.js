// The goal of this exercise is to convert a string to a new string where each
// character in the new string is '(' if that character appears only once in
// the original string, or ')' if that character appears more than once in the
// original string. Ignore capitalization when determining if a character is a
// duplicate.
//
// Examples:
//
// "din" => "((("
//
// "recede" => "()()()"
//
// "Success" => ")())())"
//
// "(( @" => "))(("

'use strict'
/*
function duplicateEncode(word){
  let myWordObject = {};
  for(let i = 0, j = word.length; i < j; i++) {
    myWordObject[word[i].toLowerCase()] = myWordObject[word[i]] + 1 || 1;
  }

  let myEncodedWord = '';
  for(let i = 0, j = word.length; i < j; i++) {
    if(myWordObject[word[i]] === 1) {
      myEncodedWord += '(';
    } else {
      myEncodedWord += ')';
    }
  }

  return myEncodedWord;
}
*/
function duplicateEncode(word) {
  return word.toLowerCase()
             .split('')
             .map(function(currentValue, index, array) {
               return array.indexOf(currentValue) == array.lastIndexOf(currentValue) ? '(' : ')';
             })
             .join('');
}

/*
  Comments: the refactored version makes clever use of indexOf and lastIndexOf
  to check is something is a duplicate. I have to remember this pattern
*/

console.log(duplicateEncode('din'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('recede') === '()()()');
console.log(duplicateEncode('(( @'));
console.log(duplicateEncode('(( @') === '))((');
