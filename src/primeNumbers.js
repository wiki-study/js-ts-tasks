/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function (from, to) {
    const result = [];

    if (from < 2) from = 2;
    if (to > highestNumber) to = highestNumber;

    for (let i = from; i <= to; i++) {
      let isPrime = true;

        for (let k = 2; k < i; k++) {
          if (i % k === 0) {
            isPrime = false;
            break;
          }
        }
      
      if (isPrime) {
        result.push(i);
      }
    }
return result;
  };
};
