/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const numA = Number(String(firstNumber).replaceAll(' ', ''));
  const numB = Number(String(secondNumber).replaceAll(' ', ''));
  return numA + numB;
};
