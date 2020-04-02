'use strict'

class Calculator {
  //write your code here
  constructor (result = 0) {
    this.result = result
  }

  add (number) {
    this.result += number
    return this
  }
  subtract (number) {
    this.result -= number
    return this
    
  }
  multiply (number) {
    this.result *= number
    return this
  }
  divide (number) {
    this.result /= number
    return this
  }
  square () {
    this.result ** 2
    return this
  }
  powerOf (number) {
    this.result ** number
    return this
  }
  squareRoot (number = this.result) {
    this.result = Math.sqrt(number)
    return this
  }
  circleArea (radius) {
    return this.result = Math.PI * radius * radius
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
