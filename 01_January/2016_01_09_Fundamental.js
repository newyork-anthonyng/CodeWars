/*
Write a function uniq that takes in an array arr then returns unique items of arr.

For example

 uniq(['a', 'b', 'a']) === ['a', 'b']
 */

/*
 function uniq(arr) {
   return arr.filter(function(currentValue, index) {
     if(arr.indexOf(currentValue) === index) {
       return true;
     } else {
       return false;
     }
   });
 }
 */

 function uniq(arr) {
   return Array.from(new Set(arr));
 }

/*
  Comments: Found out about the Set object. 
*/

 console.log(uniq(['a', 'b', 'a']));
