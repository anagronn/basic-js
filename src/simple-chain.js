const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  myChain: [],
  getLength() {
    return this.myChain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.myChain.push('(  )');
    } else {
      this.myChain.push(`( ${value} )`);
    }
    return this; 
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.myChain.length || !Number.isInteger(position)) {
      this.myChain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.myChain.splice(position - 1, 1); 
    return this; 
  },
  reverseChain() {
    this.myChain.reverse();
    return this; 
  },
  finishChain() {
    const resultingChain = this.myChain.join('~~');
    this.myChain = []; 
    return resultingChain;
  }
};

module.exports = {
  chainMaker
};