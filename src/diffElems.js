/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const singleVal = [];
  for (let i = 0; i < arr.length; ++i) {
    if (!singleVal.includes(arr[i])) {
      singleVal.push(arr[i])
    }
  }
  return singleVal.length
};
