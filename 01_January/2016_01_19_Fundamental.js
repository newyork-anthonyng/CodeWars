/*
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to miliseconds.

Example:

past(0, 1, 1) == 61000
*/

'use strict';

function past(h, m, s) {
  return (s * 1000) + (m * 60000) + (h * 3600000);
};

console.log(past(0, 1, 1));
