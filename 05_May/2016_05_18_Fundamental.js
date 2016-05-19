function autocomplete(input, dictionary) {
	var newInput = getAlphaCharacters(input);
	console.log(newInput);
	var regex = new RegExp('^' + newInput, 'i');

	function getMatchingWords(currentWord) {
		return regex.test(currentWord);
	};

	var myList = dictionary.filter(getMatchingWords);
	return myList.slice(0, 5);
}

function getAlphaCharacters(str) {
	return str.replace(/[^a-z]/g, '');
}

console.log(autocomplete('ai', ['airplane','airport','apple','ball']));
console.log(autocomplete('$$ai', ['airplane','airport','apple','ball']));

// Recognize when to use what kindof RegEx. In this one, regex was needed for any non alpha characters.
// At first I used (\W|\d). But checking for [^a-z] was far more effective.
