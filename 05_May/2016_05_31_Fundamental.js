function isPangram(string) {
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
		'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	var myString = string.toLowerCase();

	for(var i = 0; i < alphabet.length; i++) {
		if(myString.indexOf(alphabet[i]) === -1) return false;
	}

	return true;
}

var string = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(string));
var string1 = 'This is not a pangram.';
console.log(isPangram(string1));

