/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
const delById = (n, x) => parseInt(n.toString().split('').filter((e, i) => i !== x).join(''), 10);
const deleteDigit = (n) => Math.max(...n.toString().split('').map((e, i) => delById(n, i)));

module.exports = deleteDigit;
