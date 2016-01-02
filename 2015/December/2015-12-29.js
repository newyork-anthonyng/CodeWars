// A function, someFunction(), that takes a callback as an argument
// The first 3 times the function is called, it should return the expected results
// The fourth one returns a default error message
// Every successive odd call returns the expected argument
// Every successive even call returns a default error message

function someFunction(cb) {
  var errorMessage = 'Error';
  var numberOfTimesCalled = 0;

  function test(a, b) {
    if(++numberOfTimesCalled <= 3 || numberOfTimesCalled % 2 != 0) {
      return cb(a, b);
    } else {
      return 'Error';
    };
  };

  return test;
};

function add(a, b) {
  return a + b;
};

var s = someFunction(add);

console.log(s(1, 2));
console.log(s(2, 3));
console.log(s(3, 4));
console.log(s(1, 2));
console.log(s(1, 2));
console.log(s(1, 2));
