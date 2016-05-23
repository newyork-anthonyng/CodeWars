function rot13(message){
	var encodedMessage = message.split('').reduce(function(prev, current) {
		var regex = /[^a-zA-Z]/g;
		if(regex.test(current)) return prev += current;

		var currentCharCode = current.charCodeAt(0);
		currentCharCode = encryptLetter(currentCharCode, 13);

		var newLetter = String.fromCharCode(currentCharCode);
		return prev += newLetter;
	}, '');

	return encodedMessage;
}

function encryptLetter(charCode, offset) {
	var newCharCode = charCode + 13;

	var outOfBoundsLowerCase = charCodeIsLowerCase(charCode) && newCharCode > 122;
	var outOfBoundsUpperCase = charCodeIsUpperCase(charCode) && newCharCode > 90;

	if(outOfBoundsLowerCase || outOfBoundsUpperCase) newCharCode -= 26;

	return newCharCode;
}

function charCodeIsLowerCase(charCode) {
  return charCode >= 97 && charCode <= 122;
}

function charCodeIsUpperCase(charCode) {
	return charCode >= 65 && charCode <= 90;
}

console.log(rot13('test') === 'grfg');
console.log(rot13('Test') === 'Grfg');
console.log(rot13('Ruby is cool!') === 'Ehol vf pbby!');
console.log(rot13('abcdefghijklmnopqrstuvwxyz') === 'nopqrstuvwxyzabcdefghijklm');

/* Alternative Solution
	var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"

	function rot13(message) {
		return message.split('').map(function(c) {
			var i = a.indexOf(c);
			if(i < 0) return c;

			return b[i];
		}).join('');
	}
*/
