/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  n = Math.abs(n);
const nToArr = String(n).split('');
const backToNumber = nToArr.map(Number);

  let i = 0;
  result = 0;
  while (i < backToNumber.length) {
    result = result + backToNumber[i];
    i = i + 1;
  }
  return result
};
