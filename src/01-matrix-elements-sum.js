/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
const getMatrixElementsSum = (matrix) => {
  const isActive = matrix[0].map((el) => el > 0);
  let sum = 0;
  matrix.forEach((line) => {
    line.forEach((el, j) => {
      if (isActive[j]) {
        if (el > 0) {
          sum += el;
        } else {
          isActive[j] = false;
        }
      }
    });
  });

  return sum;
};

module.exports = getMatrixElementsSum;
