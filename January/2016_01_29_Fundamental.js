/*
A prime number is an integer greater than 1 that is only evenly divisible by itself and 1.

Write your own Primes class with class method Primes.first(n) that returns an array of the first n prime numbers.

For example:

Primes.first(1)
# => [2]

Primes.first(2)
# => [2, 3]

Primes.first(5)
# => [2, 3, 5, 7, 11]

Primes.first(20).last(5)
# => [53, 59, 61, 67, 71]
*/

var Primes =  {
  first(num) {
    // return an array of prime numbers, with num length
    var array = [];
    var i = 2;

    while(array.length < num) {
      if(this.isPrime(i)) {
        array.push(i);
      }

      i++;
    }

    return array;
  },

  isPrime(num) {
    if(num % 2 === 0 && num != 2) {
      return false;
    }

    for(var i = 3; i < Math.sqrt(num) + 1; i+=2) {
      if(num % i === 0) return false;
    }
    return true;
  }
}

console.log(Primes.first(5));
console.log(Primes.isPrime(9));
