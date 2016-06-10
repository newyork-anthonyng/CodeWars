function prefill(n, v) {
	if(v === undefined) return undefined;
	if(isNaN(n)) throw new TypeError(n + ' is invalid');

	var myArray = [];
	myArray.length = n;
	myArray.fill(v);

	return myArray;
}

console.log(prefill(0, 1));
console.log(prefill(3, 1));
console.log([1, 1, 1]);

console.log(prefill(2, 'abc'));
console.log(['abc','abc']);

console.log(prefill('1', 1));
console.log([1]);

console.log(prefill(3, prefill(2, '2d')));
console.log([['2d', '2d'], ['2d', '2d'], ['2d', '2d']]);
