/*
function calculate(sign, operand1, operand2) {
  switch (sign) {
    case '+':
      return operand1 + operand2;
      break;
    case '-':
      return operand1 - operand2;
      break;
    case '*':
      return operand1 * operand2;
      break;
    case '/':
      return operand1 / operand2;
      break;
  }
}

function zero() {
  if(arguments.hasOwnProperty('0')) {
    return calculate(arguments[0][0], 0, arguments[0][1]);
  } else {
    return 0;
  }
}
function one() {
  if(arguments.hasOwnProperty('0')) {
    return calculate(arguments[0][0], 1, arguments[0][1]);
  } else {
    return 1;
  }
}
function two() {
  if(arguments.hasOwnProperty('0')) {
    return calculate(arguments[0][0], 2, arguments[0][1]);
  } else {
    return 2;
  }
}
function three() {
  if(arguments.hasOwnProperty('0')) {
    return calculate(arguments[0][0], 3, arguments[0][1]);
  } else {
    return 3;
  }
}
function four() {
  if(arguments.hasOwnProperty('0')) {
    return calculate(arguments[0][0], 4, arguments[0][1]);
  } else {
    return 4;
  }
}
function five() {
  if(arguments.hasOwnProperty('0')) {
    return calculate(arguments[0][0], 5, arguments[0][1]);
  } else {
    return 5;
  }
}
function six() {
  if(arguments.hasOwnProperty('0')) {
    return calculate(arguments[0][0], 6, arguments[0][1]);
  } else {
    return 6;
  }
}
function seven() {
  if(arguments.hasOwnProperty('0')) {
    return calculate(arguments[0][0], 7, arguments[0][1]);
  } else {
    return 7;
  }
}
function eight() {
  if(arguments.hasOwnProperty('0')) {
    return calculate(arguments[0][0], 8, arguments[0][1]);
  } else {
    return 8;
  }
}

function nine() {
  if(arguments.hasOwnProperty('0')) {
    return calculate(arguments[0][0], 9, arguments[0][1]);
  } else {
    return 9;
  }
}

function plus() {
  return ['+', arguments[0]];
}
function minus() {
  return ['-', arguments[0]];
}
function times() {
  return ['*', arguments[0]];
}
function dividedBy() {
  return ['/', arguments[0]];
}

// console.log(seven(times(five()))); // must return 35
// console.log(four(plus(nine()))); // must return 13
// console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
*/

function zero(func) { return func ? func(0) : 0; };
function one(func) { return func ? func(1) : 1; };
function two(func) { return func ? func(2) : 2; };
function three(func) { return func ? func(3) : 3; };
function four(func) { return func ? func(4) : 4; };
function five(func) { return func ? func(5) : 5; };
function six(func) { return func ? func(6) : 6; };
function seven(func) { return func ? func(7) : 7; };
function eight(func) { return func ? func(8) : 8; };
function nine(func) { return func ? func(9) : 9; };

function plus(a) {
  return function(b) {
    return a + b;
  };
};

function minus(a) {
  return function(b) {
    return b - a;
  };
};

function times(a) {
  return function(b) {
    return a * b;
  };
};

function dividedBy(a) {
  return function(b) {
    return b / a;
  };
};

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
