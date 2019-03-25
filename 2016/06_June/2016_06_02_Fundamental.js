function encode(string) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];

	var myString = string;

	vowels.forEach(function(currentValue, index) {
		var regex = new RegExp(currentValue, 'g');
		myString = myString.replace(regex, index + 1);
	});

	return myString;
}

function decode(string) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];

	var myString = string;

	vowels.forEach(function(currentValue, index) {
		var regex = new RegExp(index + 1, 'g');
		myString = myString.replace(regex, currentValue);
		//myString = myString.replace(index + 1, currentValue);
	});

	return myString;
}

var encoded = encode('hi there');
console.log(encoded);

var decoded = decode(encoded);
console.log(decoded);
