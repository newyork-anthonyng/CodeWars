/*
Write a function that removes each 9 that it is in between 7s.

sevenAte9('79712312') => '7712312'
sevenAte9('79797') => '777'
*/

'use strict';

function sevenAte9(str){
  let copyStr = str;

  if(str.match(/797/)) {
    const newString = str.replace(/797/g, '77');
    copyStr = sevenAte9(newString);
  } else {
    return str;
  }

  return copyStr;
}

/*
  Comments: Used regex for the first time. It worked out pretty well!
*/

// console.log(sevenAte9('79712312'));
// console.log(sevenAte9('79797'));
