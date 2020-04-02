'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.result = 0
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
    this.result = Math.pow(this.result,num)
    return this
  }
  squareRoot (num) {
    this.result = Math.sqrt(num)
    return this
  }
  luasLingkaran (jarijari){
    this.result = Math.floor((22/7) * jarijari * jarijari)
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
