/*
  Make the function more elegant by using recursion
*/

/*
function factorial(num){
var result=num;
for(var i=num-1; i!=0; i--){
result *=i;
}
return result;
}
*/

function factorial(num) {
  if(num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(3) === 6);
console.log(factorial(2) === 2);
