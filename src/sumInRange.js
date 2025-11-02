/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  if (start > end) {
  [start, end] = [end, start];
}

  let i = Number(start);
  let sum = 0;
  while (i <= Number(end)) {
    sum = sum + i;
    i = i + 1;
  }
  return sum;
};
