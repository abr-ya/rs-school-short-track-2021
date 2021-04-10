/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
const str2obj = (str) => {
  const obj = {};
  str.split('').forEach((el) => {
    obj[el] = (obj[el] ? obj[el] : 0) + 1;
  });
  return obj;
};

const getCommonCharacterCount = (s1, s2) => {
  const ob1 = str2obj(s1);
  const ob2 = str2obj(s2);
  let res = 0;
  Object.keys(ob1).forEach((key) => {
    if (ob2[key]) res += Math.min(ob1[key], ob2[key]);
  });
  return res;
};

module.exports = getCommonCharacterCount;
