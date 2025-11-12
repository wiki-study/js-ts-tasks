/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  
  const result = [];

  for (let i = 0; i < arr.length; ++i) {
    const number = arr[i]
    
    const digits = Math.abs(number).toString().length;

    let replaceNumber; 

    if (digits === 1) replaceNumber = 1;
    else if (digits === 2) replaceNumber = 2;
    else if (digits === 3) replaceNumber = 3;
    else replaceNumber = 4;
    
    result.push(replaceNumber);
  }
return result;
};
