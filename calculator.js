'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.result = number;
  }
  add (num) {
    if (num)
    this.result += num;
    return this;
  }
  subtract (num) {
    this.result -= num;
    return this;
  }
  multiply (num) {
    this.result *= num;
    return this;
  }
  divide (num) {
    this.result /= num;
    return this;
  }
  square () {
    this.result *= this.result;
    return this;
  }
  squareRoot () {
    this.result = Math.sqrt(this.result);
    return this;
  }
}

//example
const calc = new Calculator(9);
console.log(calc.result);
calc.squareRoot().add(calc.result).divide(2).multiply(8).add(3).square().subtract(7);
console.log(calc.result);

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
