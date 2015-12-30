/*
Write a function that takes an array and counts the number of each unique
element present.

Example:
count(['james', 'james', 'john'])
#=> { 'james': 2, 'john': 1}
*/

function count(array) {
  if(!Array.isArray(array)) return false;

  var myObject = {};
  for(var i = 0, j = array.length; i < j; i++) {
    myObject[array[i]] = myObject[array[i]] + 1 || 1;
  }

  return myObject;
}

console.log(count(['james', 'james', 'john']));
console.log(count(['a', 'a', 'b', 'b', 'b']));
