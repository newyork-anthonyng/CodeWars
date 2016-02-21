function removeChar(str){
  var myArray = str.split('');
  return myArray.slice(1, myArray.length - 1).join('');
};

console.log(removeChar('eloquent'));
console.log(removeChar('country'));
