var uniqueInOrder=function(iterable){
	if(iterable.length === 0) {
		return [];
	}

	var last = iterable[0];
	var result = [last];

	for(var i = 1; i < iterable.length; i++) {
		var currentLetter = iterable[i];
		if(currentLetter !== last) {
			result.push(currentLetter);
			last = currentLetter;
		}
	}

	return result;
}
//console.log(uniqueInOrder('AAAABBBCCDAABBB'));
//console.log(['A','B','C','D','A','B']);
//console.log(uniqueInOrder('ABBCcAD'));
//console.log(['A', 'B', 'C', 'c', 'A', 'D']);

//console.log(uniqueInOrder([1,2,2,3,3]));
//console.log([1,2,3]);
console.log(uniqueInOrder([]));
console.log([]);
