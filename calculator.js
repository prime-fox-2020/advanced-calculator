'use strict'

class Calculator {
  //write your code here
  constructor () {
    this._pi   = 3.14;
    this.value = 0;
    // return this.value = 0
  }
  add (val) {
    this.value += val;
    return this;
  }
  subtract (val) {
    this.value -= val;
    return this;
  }
  multiply (val) {
    this.value *= val;
    return this;
  }
  divide (val) {
    this.value /= val;
    return this;
  }
  square (times) {
    this.value = Math.pow(this.value, times);
    return this;
  }
  squareRoot () {
    this.value = Math.sqrt(this.value);
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
