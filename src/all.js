/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise(function (resolve, reject) {
    if (promisesArray.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array(promisesArray.length);
    let count = 0;

    for (let i = 0; i < promisesArray.length; i++) {
      promisesArray[i]
        .then(function (value) {
          results[i] = value;
          count++;

          if (count === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(function (error) {
          reject(error);
        });
    }
  });
};
