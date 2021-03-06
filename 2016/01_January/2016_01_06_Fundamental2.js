/*
You are a professor in high school. Summer holidays are over and you have been
given many different lists containing your new students' names. It's your
responsability to put all these lists together, in ascending order in the
alphabet, so you can get organized in a more efficient way.

As a computer programmer in your free time, you decided to write a program
that would do what you need.

Your task

Given multiple arrays, to the function organize, return a single one with all
the values of the previous arrays in ascending order in the alphabet.

Example:

organize(["Luis, "Ana", "Josh"]);
// ["Ana", "Josh", "Luis"]
*/

function organize(arrays) {
  var merged = [].concat.apply([], arrays);

  // check for duplicates
  var uniqueArray = merged.filter(function(currentElement, index) {
    return index === merged.lastIndexOf(currentElement)
  });

  return uniqueArray.sort();
}

var myArrays = ['Isabella','Noah','Harper','Noah','Liam']
console.log(organize(myArrays));
