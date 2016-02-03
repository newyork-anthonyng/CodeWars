/*
Transpose means is to interchange rows and columns of a two-dimensional array matrix.

[AT]ij=[A]ji

ie: Formally, the i th row, j th column element of AT is the j th row, i th column element of A:

[[1,2,3],[4,5,6]].transpose() //should return [[1,4],[2,5],[3,6]]

*/

'use strict';

Array.prototype.transpose = function() {
  if(this.length === 0) return [];
  if(this[0].length === 0) return [[]];

  let transposeArray = [];

  for(let i = 0, j = this[0].length; i < j; i++) {
    transposeArray[i] = [];

    for(let x = 0, y = this.length; x < y; x++) {
      transposeArray[i].push(this[x][i]);
    }
  }

  return transposeArray;
};

// [[1,2,3],[4,5,6]].transpose();
// console.log([].transpose());
console.log([[],[],[]].transpose());
