/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
const findIndex = (array, value) => {
  let res = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      res = i;
      break;
    }
  }
  return res;
};

module.exports = findIndex;
