'use strict'

class Calculator {
  //write your code here
  constructor (numbers = 0) {
    this.result = numbers
    return this
  }
  add (num) {
    this.result += num
    return this
  }
  subtract (num) {
    this.result -= num
    return this
  }
  multiply (num) {
    this.result *= num
    return this
  }
  divide (num) {
    this.result /= num
    return this
  }
  square (num) {
    this.result = Math.pow(this.result, num)
    return this
  }
  squareRoot (num) {
    this.result = Math.pow(this.result, 1/num)
    return this
  }
  Pi () {
    this.result *= Math.PI
    return this
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
