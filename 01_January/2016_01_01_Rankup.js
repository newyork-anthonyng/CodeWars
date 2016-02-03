// Given some points (cartesian coordinates), return true if all
// of them lie on a line.
//
// onLine([[1,2], [7, 4], [22, 9]]);                 // returns true
// onLine([[1,2], [-3, -14], [22, 9]]);              // returns false

'use strict'

function onLine(points) {

  let mySlope;

  for(let i = 1, j = points.length; i < j; i++) {
    // go through the first two points and calculate slope
    if(i == 1 || !mySlope) {
      mySlope = slope(points[i - 1], points[i]);
    } else {
      let currentSlope = slope(points[0], points[i]);

      if(currentSlope !== mySlope && currentSlope !== 0 && mySlope !== 0) return false;
    }
  }

  function slope(point1, point2) {
    let rise = point1[1] - point2[1];
    let run  = point1[0] - point2[0];
    return rise / run;
  }

  return true;
}

/*
  Comments: Ran into issue with NaN for the first time. 
*/

let points = [[1,2], [7,4], [22,9]];
console.log(onLine(points));
points = [[1,2], [-3,-14], [22,9]];
console.log(onLine(points));
points= [[1,2], [1,2], [7,4], [22,9]];
console.log(onLine(points));
