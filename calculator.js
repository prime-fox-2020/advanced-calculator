'use strict'

class Calculator {

  constructor (input) {
    this.number = input
  }
  add (addNumber) {
    this.number += addNumber
    return this
  }
  subtract (subtractNumber) {
    this.number -= subtractNumber
    return this
  }
  multiply (multiplyNumber) {
    this.number *= multiplyNumber
    return this
  }
  divide (divideNumber) {
    this.number /= divideNumber
    return this
  }
  square (squareNumber) {
    this.number = Math.pow(this.number, squareNumber)
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }
  constPi(){
    this.number = Math.PI * Math.pow(this.number, 2)
    return this
  }
}


//TEST-CASE
let inputNumber = new Calculator(16)
inputNumber
console.log(inputNumber.add(8));







/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
