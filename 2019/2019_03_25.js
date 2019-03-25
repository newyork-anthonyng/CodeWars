const assert = require("assert").strict;

function move_zeros(arrNum, isRight = true) {
  const zeroes = [];
  const nonZeroes = [];

  arrNum.forEach((num) => {
    if (num === 0) {
      zeroes.push(num);
    } else {
      nonZeroes.push(num);
    }
  });

  if (isRight) {
    return [...nonZeroes, ...zeroes];
  } else {
    return [...zeroes, ...nonZeroes];
  }
}

function assertArray(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    assert.strictEqual(arr1[i], arr2[i]);
  }
}

let result = move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true);
assertArray(result, [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);
result = move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false);
assertArray(result, [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]);
result = move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0]);
assertArray(result, [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);