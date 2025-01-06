const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [...arr];

  for (let i = 0; i < result.length; i++) {
    if (result[i] === '--double-next' && i <= result.length - 1) {
      if (i === result.length - 1) result[i] = null;
      if (i !== result.length - 1) result[i] = result[i + 1];
    }
    else if (result[i] === '--double-prev' && i >= 0) {
      if (i === 0) result[i] = null;
      if (i !== 0) result[i] = result[i - 1];
    }
    else if (result[i] === '--discard-next' && i <= result.length - 1) {
      result[i] = null;
      if (i !== result.length - 1) {
        result[i + 1] = null;
        i += 1;
      }
    }
    else if (result[i] === '--discard-prev' && i >= 0) {
      result[i] = null;
      if (i !== 0) {
        result[i - 1] = null;
      }
    }
  }
  return result.filter(item => item !== null); 
}

module.exports = {
  transform
};
