'use strict'

class Calculator {
  //write your code here
  constructor (value) {
    this.value = value
  }

  add (num) {
    this.value += num
    return this
  }

  subtract (num) {
    this.value -= num
    return this
  }

  multiply (num) {
    this.value *= num
    return this
  }

  divide (num) {
    this.value /= num
    return this
  }

  square (num) {
    this.value **= num
    return this
  }

  squareRoot (num) {
    this.value += Math.sqrt(Number(num))
    return this
  }

  phi () {
    this.value = Math.PI * this.value * this.value
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
