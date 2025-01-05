const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  const digits = String(n).split('').map((elem) => Number(elem));
  const maxIndex = digits.indexOf(Math.max(...digits));
  const minIndex = digits.indexOf(Math.min(...digits));
  let digitsMinusOne = [];
  if(maxIndex > 0){
    digitsMinusOne = digits.filter((_, i) => i !== maxIndex - 1);
  } else digitsMinusOne = digits.filter((_, i) => i !== minIndex);
  return Number(digitsMinusOne.join(''));
}

module.exports = {
  deleteDigit
};
