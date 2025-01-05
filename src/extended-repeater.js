const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition === undefined ? '' : options.addition;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  const stringifiedStr = (str === null || str === undefined) ? 'null' : String(str);
  const stringifiedAddition = (addition === null || addition === undefined) ? 'null' : String(addition);
  const additionString = new Array(additionRepeatTimes).fill(stringifiedAddition).join(additionSeparator);
  const repeatedStr = new Array(repeatTimes).fill(stringifiedStr + additionString).join(separator);
  return repeatedStr;
}

module.exports = {
  repeater
};
