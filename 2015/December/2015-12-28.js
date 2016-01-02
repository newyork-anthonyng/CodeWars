/*
The goal of this exercise is to write a method that takes two strings as
parameters and returns an integer n, where n is equal to the amount of spaces
"rotated forward" the second string is relative to the first string (more
precisely, to the first character of the first string).

For instance, take the strings "fatigue" and "tiguefa". In this case, the
first string has been rotated 5 characters forward to produce the second
string, so 5 would be returned.

If the second string isn't a valid rotation of the first string,
the method returns -1.

Examples:

"coffee", "eecoff" => 2

"eecoff", "coffee" => 4

"moose", "Moose" => -1

"isn't", "'tisn" => 2

"Esham", "Esham" => 0

"dog", "god" => -1
*/

// *** My solution *** //
/*
function shiftedDiff(first, second) {
  // remove punctuation
  var firstWord = first.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()\']/g, '');
  var secondWord = second;

  // check if the words are the same length
  if(firstWord.length !== secondWord.length) return -1;

  // check if words are the same
  if(firstWord === secondWord) return 0;

  for(var i = 0, j = secondWord.length; i < j; i++) {
    // create a new word by creating two slices
    var firstSlice = secondWord.slice(0, i + 1);
    var secondSlice = secondWord.slice(i + 1);
    var newWord = secondSlice + firstSlice;

    // check if this new word is the same
    if(newWord === firstWord) return i + 1;
  }

  return -1;
}
*/

// *** Best solution from CodeWars *** //
function shiftedDiff(first, second) {
  if (first.length != second.length) return -1
  return (second + second).indexOf(first)
}
/*
This was the best solution that was offered.
It combines a word twice, so you'd have 'coffeecoffee'. Then if your first word
is in that string, it'll return the index.

This solution doesn't work with words that have punctuation in it though, such
as the word, isn't
*/

console.log(shiftedDiff('abcdefg', 'abc') === -1);
console.log(shiftedDiff('Moose', 'moose') === -1);
console.log(shiftedDiff('coffee', 'eecoff') === 2);
console.log(shiftedDiff('Esham', 'Esham') === 0);
console.log(shiftedDiff(' ', ' ') === 0);
console.log(shiftedDiff('hoop', 'pooh') === -1);
console.log(shiftedDiff('   ', ' ') === -1);
console.log(shiftedDiff('dog', 'god') === -1);
console.log(shiftedDiff('isn\'t', 'tisn'));
