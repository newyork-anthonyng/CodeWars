Number.prototype.add = function(a) {
	return this.valueOf() + a;
};

Number.prototype.subtract = function(a) {
	return this.valueOf() - a;
};

Number.prototype.multiply = function(a) {
	return this.valueOf() * a;
};

Number.prototype.divide = function(a) {
	return this.valueOf() / a;
};

Number.prototype.square = function() {
	return this.valueOf() * this.valueOf();
};

console.log((0).add(2) === 2);
console.log((5).subtract(1) === 4);
console.log((3).multiply(2) === 6);
console.log((10).divide(5) === 2);
console.log((5).square() === 25);
