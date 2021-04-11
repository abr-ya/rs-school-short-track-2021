/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const encodeLine = (str) => {
  const arr = str.split('');
  let buf = arr[0];
  let count = 1;
  let res = '';
  arr.slice(1).forEach((el) => {
    if (el === buf) {
      count += 1;
    } else {
      if (count > 1) {
        res = `${res}${count.toString()}${buf}`;
      } else {
        res = `${res}${buf}`;
      }
      buf = el;
      count = 1;
    }
  });
  if (count > 1) {
    res = `${res}${count.toString()}${buf}`;
  } else {
    res = `${res}${buf}`;
  }

  return (str !== '') ? res : '';
};

module.exports = encodeLine;
