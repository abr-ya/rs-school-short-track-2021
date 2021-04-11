/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const minesweeper = (matrix) => (
  matrix.map((line, i) => (
    line.map((el, j) => {
      // console.log(i, j);
      // определяем размер "зоны интереса"
      const x1 = j - 1 >= 0 ? j - 1 : j;
      const x2 = j + 1 <= line.length - 1 ? j + 1 : j;
      const y1 = i - 1 >= 0 ? i - 1 : i;
      const y2 = i + 1 <= matrix.length - 1 ? i + 1 : i;
      // console.log(x1, x2, y1, y2);
      // собираем все элементы в один массив
      const acc = [];
      acc.push(...matrix[y1].slice(x1, x2 + 1));
      if (y2 - y1 === 2) acc.push(...matrix[y1 + 1].slice(x1, x2 + 1));
      acc.push(...matrix[y2].slice(x1, x2 + 1));
      // считаем мины, если надо - убираем "саму себя"
      return acc.filter((e) => e).length - (el ? 1 : 0);
    })
  ))
);

module.exports = minesweeper;
