function reverseWords(str) {
	var wordsArray = str.split(' ');
	var reversedArray = wordsArray.map(function(currentWord) {
		return reverseWord(currentWord);
	});

	return reversedArray.join(' ');
}

function reverseWord(str) {
	return str.split('').reverse().join('');
}

console.log(reverseWords('This is an example!'));
