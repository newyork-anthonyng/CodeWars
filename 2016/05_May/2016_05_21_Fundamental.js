var sum_pairs=function(ints, s){
	var allAnswers = [];
	for(var i = 0; i < ints.length; i++) {
		var currentNumber = ints[i];
		var otherNumber = s - currentNumber;

		var otherIndex = ints.lastIndexOf(otherNumber);

		if(otherIndex !== -1 && otherIndex !== i) {
			var possibleAnswer = {
				pair: [currentNumber, otherNumber],
				index: (otherIndex + i)
			};
			allAnswers.push(possibleAnswer);
		}
	}

	if(allAnswers.length === 0) return null;

	var bestAnswer = allAnswers[0]['pair'];
	var bestIndex = allAnswers[0]['index'];

	for(var i = 1; i < allAnswers.length; i++) {
		var currentPair = allAnswers[i];
		if(currentPair['index'] < bestIndex) {
			bestAnswer = currentPair['pair'];
			bestIndex = currentPair['index'];
		}
	}
	return bestAnswer;
}

function isArrayEqual(arr1, arr2) {
	if(!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

	if(arr1.length !== arr2.length) return false;

	// check for array content
	for(var i = 0; i < arr1.length; i++) {
		if(arr1[i] !== arr2[i]) return false;
	}

	return true;
}

l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];

console.log(isArrayEqual(sum_pairs(l1, 8), [1, 7]));
console.log(isArrayEqual(sum_pairs(l2, -6), [0, -6]));
console.log(isArrayEqual(sum_pairs(l4, 2), [1, 1]));
console.log(isArrayEqual(sum_pairs(l6, 8), [4, 4]));
console.log(isArrayEqual(sum_pairs(l7, 0), [0, 0]));
console.log(isArrayEqual(sum_pairs(l8, 10), [13, -3]));
