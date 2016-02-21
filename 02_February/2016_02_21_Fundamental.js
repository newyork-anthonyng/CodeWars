function removeChar(str){
//  var myArray = str.split('');
//  return myArray.slice(1, myArray.length - 1).join('');
//  best answer. Remember that a string also has a slice method, similar to array.slice
  return str.slice(1, -1);
};

console.log(removeChar('eloquent'));
console.log(removeChar('country'));
