/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
const getAllD = (str) => {
  let domain = '';
  return str.split('.').reverse().map((el) => {
    domain = `${domain}.${el}`;
    return domain;
  });
};

const getDNSStats = (domains) => {
  const res = {};
  domains.forEach((dom) => {
    getAllD(dom).forEach((d) => {
      res[d] = res[d] ? res[d] + 1 : 1;
    });
  });
  return res;
};

module.exports = getDNSStats;
