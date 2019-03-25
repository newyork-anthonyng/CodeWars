function range(start, end, step) {
	var myRange = [];

	if(typeof end === 'undefined') {
		end = start;
		start = 0;
	}

	if(step === 0) {
		myRange.length = (end - start);
		myRange.fill(start);
		return myRange;
	} else {
		step = step || 1;
	}

	for(var i = start; i < end; i+=step) {
		myRange.push(i);
	}

	return myRange;
}

function assert(expectation, message) {
	if(!expectation) {
		console.log(message);
	} else {
		console.log('Success!');
	}
}

function arrayIsEqual(a, b) {
	if(a === b) return true;
	if(a == null || b == null) return false;
	if(a.length != b.length) return false;

	for(var i = 0; i < a.length; i++) {
		if(a[i] !== b[i]) return false;
	}
	return true;
}

var expectation = [1,2,3,4,5,6,7,8,9,10];
assert(arrayIsEqual(range(1, 11), expectation), 'First test failed.');
expectation = [1,1,1];
assert(arrayIsEqual(range(1, 4, 0), expectation), 'Second test failed.');
expectation = [];
assert(arrayIsEqual(range(0), expectation), 'Third test failed.');
expectation = [];
assert(arrayIsEqual(range(10, 0), expectation), 'Fourth test failed.');
expectation = [0,1,2,3,4,5,6,7,8,9];
assert(arrayIsEqual(range(10), expectation), 'Fifth test failed.');
expectation = [0, 5, 10, 15, 20, 25];
assert(arrayIsEqual(range(0, 30, 5), expectation), 'Sixth test failed.');
