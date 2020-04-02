'use strict'

class Calculator {
  //write your code here
  constructor (result = 0) {
    this.result = result
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
    this.result = Math.pow(num, 2)
    return this
  }
  squareRoot () {
    this.result = Math.sqrt(this.result)
    return this
  }
  circle (radius){
    this.result = Math.PI * Math.pow(radius, 2)
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
