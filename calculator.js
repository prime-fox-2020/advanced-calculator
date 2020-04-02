'use strict'

class Calculator {
  //write your code here
  constructor(num1,num2) {
    this.value = 0

    return this.value
  }
  add(value) {
    this.value += value
    return this;
  }
  subtract(value) {
    this.value -= value
    return this;
  }
  multiply(value) {
    this.value *= value
    return this;
  }
  divide(value) {
    this.value /= value
    return this;
  }
  square(value) {
    this.value = Math.pow(this.value, value)
    return this;
  }
  squareRoot() {
    this.value = Math.sqrt(this.value)
    return this;
  }


}

const nomor = new Calculator()
console.log(nomor.add(9)
                  .subtract(5)
                  .multiply(7)
                  .square(5))

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
