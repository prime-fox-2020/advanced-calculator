'use strict'

class Calculator {
  //write your code here
  constructor (result) {
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
  
  square (number) {
    this.result = Math.pow(this.result, number)
    return this
  }
  
  squareRoot (number) {
    this.result += Math.sqrt(Number(number))
    return this
  }

  circel(number) {
    this.result = Math.PI * number * number
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
