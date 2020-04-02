'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num
  }
  add (addNum) {
    this.number += addNum
    return this
  }
  subtract (subtractNum) {
    this.number -= subtractNum
    return this
  }
  multiply (multiplyNum) {
    this.number *= multiplyNum
    return this
  }
  divide (divideNum) {
    this.number /= divideNum
    return this
  }
  square (squareNum) {
    this.number = Math.pow(this.number, squareNum)
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }
  constPi(){
    this.number = this.number*Math.PI
    return this
  }
}

//TEST-CASE
const number1 = new Calculator(2)
number1
console.log(number1.add(18).subtract(8).multiply(2).divide(2).square(2).squareRoot().subtract(10))
console.log(number1.constPi())

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
