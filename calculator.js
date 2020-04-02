'use strict'

class Calculator {
  //write your code here
  constructor (addNum = 0) {
    this.addNum = addNum
    this.result = addNum
  }
  add (...args) {
    this.result += args.reduce((accumulator, currentValue) => accumulator + currentValue)
    return this
  }
  subtract (...args) {
    this.result -= args.reduce((accumulator, currentValue) => accumulator - currentValue)
    return this
  }
  multiply (...args) {
    this.result *= args.reduce((accumulator, currentValue) => accumulator * currentValue)
    return this   
  }
  divide (...args) {
    this.result /= args.reduce((accumulator, currentValue) => accumulator / currentValue)
    return this
  }
  square (...args) {
    this.result = Math.pow(this.result, ...args)
    return this
  }
  squareRoot () {
    this.result = Math.sqrt(this.result)
    return this
  }
  pi () {
    return Math.PI
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
