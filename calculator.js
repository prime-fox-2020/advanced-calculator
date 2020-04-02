'use strict'

class Calculator {
  constructor (addNum = 0) {
    this.addNum = addNum // 1st input number
    this.result = addNum // calculated number
  }
  add (...args) {
    this.result += args.reduce(reducerAdd)
    return this
  }
  subtract (...args) {
    this.result -= args.reduce(reducerSubstarct)
    return this
  }
  multiply (...args) {
    this.result *= args.reduce(reducerMultiply)
    return this    
  }
  divide (...args) {
    this.result /= args.reduce(reducerDivide)
    return this
  }
  square (...args) {
    args.forEach(loop => {
      this.result = Math.pow(this.result, loop)
    })
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


const reducerAdd = (accumulator, currentValue) => accumulator + currentValue
const reducerSubstarct = (accumulator, currentValue) => accumulator - currentValue
const reducerMultiply = (accumulator, currentValue) => accumulator * currentValue
const reducerDivide = (accumulator, currentValue) => accumulator / currentValue


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/


module.exports = Calculator