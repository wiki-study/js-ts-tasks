/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
 const result =[];
 for (let i = 0; i < arr.length; i++) {
  const param = arr[i];
  if (Array.isArray(param))
    result.push(removeItems(param, value))
  else if (param !== value) {
    result.push(param);
  }
 }
 return result;
};
