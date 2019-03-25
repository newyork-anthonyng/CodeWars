function order(words) {
	var result = [];
	var wordsArray = words.split(' ');

	wordsArray.forEach(function(currentWord) {
		var number = getNumber(currentWord);
		result[number] = currentWord;
	});

	return result.join(' ').trim();
}

function getNumber(word) {
	for(var i = 0; i < word.length; i++) {
		var currentLetter = word[i];
		if(!isNaN(currentLetter)) return currentLetter;
	}
	return -1;
}

console.log(order('is2 Thi1s T4est 3a'));
console.log('Thi1s is2 3a T4est');

/*
function order(words) {
	return words.split(' ').sort(function(a, b) {
		return a.match(/\d/) - b.match(/\d/);
	}).join(' ');
}
*/
