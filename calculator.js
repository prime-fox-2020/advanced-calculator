'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.total = 0
  }
  add (num) {
    this.total += num
    return this
  }
  subtract (num) {
    this.total -= num
    return this
  }
  multiply (num) {
    this.total *= num
    return this
  }
  divide (num) {
    this.total /= num
    return this
  }
  square (num) {
    let temp = this.total
    for(let a = 0; a < num - 1; a++){
      this.total *= temp
    }
    return this
  }

  squareRoot (num) {
    this.total = Math.pow(this.total, num)
    return this
  }

  circleArea (){
    let r = this.total
    this.total = Math.PI * (r * r)
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
