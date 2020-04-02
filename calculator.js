'use strict'

class Calculator {
  //write your code here
  constructor (input = 0) {
    this.output = input;
  }
  add (num) {
    this.output += num;
    return this;
  }
  subtract (num) {
    this.output -= num;
    return this;
  }
  multiply (num) {
    this.output *= num;
    return this;
  }
  divide (num) {
    this.output /= num;
    return this;
  }
  square () {
    this.output *= this.output;
    return this;
  }
  squareRoot () {
    this.output = Math.sqrt(this.output);
    return this;
  }
  clear () {
    this.output = 0;
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
