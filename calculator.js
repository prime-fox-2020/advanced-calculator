'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
    this.num = num
  }

  add (num) {
    let result = this.num + num
    console.log(`${this.num} + ${num} = ${result}`)
    this.num = result
    return this
  }

  subtract (num) {
    let result = this.num - num
    console.log(`${this.num} - ${num} = ${result}`)
    this.num = result
    return this
  }

  multiply (num) {
    let result = this.num * num
    console.log(`${this.num} * ${num} = ${result}`)
    this.num = result
    return this
  }

  divide (num) {
    let result = this.num / num
    console.log(`${this.num} / ${num} = ${result}`)
    this.num = result
    return this
  }

  square (num) {
    let result = this.num ** num
    console.log(`${this.num} to the power of ${num} = ${result}`)
    this.num = result
    return this
  }

  squareRoot () {
    let result = Math.sqrt(this.num)
    console.log(`Squared root of ${this.num} = ${result}`)
    this.num = result
    return this
  }

  pi(){
    return Math.PI
  }

}

let operation = new Calculator()
operation.add(4).divide(2).multiply(8).squareRoot().square(3).add(operation.pi())

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
