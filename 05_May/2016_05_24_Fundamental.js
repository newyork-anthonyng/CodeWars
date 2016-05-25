var maxSequence = function(arr) {
	var currentSum = 0;
	return arr.reduce(function(maxSum, number) {
		currentSum = Math.max(currentSum + number, 0);
		return Math.max(currentSum, maxSum);
	}, 0);
}

console.log(maxSequence([]));
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
