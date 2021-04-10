/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
const justSum = (n) => n.toString().split('').reduce((sum, el) => sum + parseInt(el, 10), 0);
const getSumOfDigits = (n) => (justSum(n) < 10 ? justSum(n) : getSumOfDigits(justSum(n)));

module.exports = getSumOfDigits;
