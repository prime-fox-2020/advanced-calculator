'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.total = 0;
  }

  add (num) {
    this.total += num;
    return this;
  }
  subtract (num) {
    this.total -= num;
    return this;
  }
  multiply (num) {
    this.total *= num;
    return this;
  }
  divide (num) {
    this.total /= num;
    return this;
  }
  square (num) {
    this.total = Math.pow(this.total,num);
    return this;
  }
  squareRoot (num) {
    this.total = Math.sqrt(this.total,num);
    return this;
  }
  luasLingkaran () {
    this.total = Math.PI * Math.pow(this.total, 2);
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
