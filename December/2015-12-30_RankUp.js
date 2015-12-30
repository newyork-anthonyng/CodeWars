/*
Do you speak retsec?

You and your friends want to play undercover agents. In order to exchange your
secret messages, you've come up with the following system: you take the word,
cut it in half, and place the first half behind the latter. If the word has an
uneven number of characters, you leave the middle at its previous place:

Task

You're given a single word. Your task is to swap the halves. If the word has
an uneven length, leave the character in the middle at that position and swap
the chunks around it.

Examples

reverseByCenter("agent") == "nteag" // center character is e

reverseByCenter("secret")  == "retsec" // no center character
*/

'use strict'

// function reverseByCenter(s) {
//   let isEven = false;
//   s.length % 2 === 0 ? isEven = true : isEven = false;
//
//   if(isEven) {
//     let midPoint   = s.length / 2;
//     let firstHalf  = s.slice(0, midPoint);
//     let secondHalf = s.slice(midPoint);
//
//     return secondHalf + firstHalf;
//   } else {
//     let midPoint   = Math.floor(s.length / 2);
//     let firstHalf  = s.slice(0, midPoint);
//     let middle     = s[midPoint];
//     let secondHalf = s.slice(midPoint + 1);
//
//     return secondHalf + middle + firstHalf;
//   }
// }

// refactor code to get rid of if-else statement
function reverseByCenter(s) {
  // edge cases
  if(typeof s !== 'string') return 'Error. Not a string';
  if(s.length === 1) return s;

  let midPoint = s.length / 2;

  let firstSlice  = s.slice(Math.ceil(midPoint));
  let middleSlice = s.slice(Math.floor(midPoint), Math.ceil(midPoint));
  let lastSlice   = s.slice(0, Math.floor(midPoint));
  return firstSlice + middleSlice + lastSlice;
}

/*
  I saw in the Best Solutions that there weren't if/else statements.
  I guess there really shouldn't have to be, if you play around with the
  Math.floor and Math.ceil. I saw the code for the middleSlice, where you slice
  out the string between Math.floor(midPoint) and Math.ceil(midPoint). If it's
  an even length, there is NOTHING to slice out, since it's the same number.
  BRILLIANT stuff.
*/

console.log(reverseByCenter('agent') === 'nteag');
console.log(reverseByCenter('secret') === 'retsec');
