'use strict'

class Calculator {
  //write your code here
  constructor (sum = 0) {
    this.sum = sum;
  }
  add = ( value = 0 ) => {
    this.sum += value;
    return this;
  }
  subtract = ( value = 1 ) => {
    this.sum -= value;
    return this;
  }
  multiply = ( value = 1 ) => {
    this.sum *= value;
    return this;
  }
  divide = ( value = 1 ) => {
    this.sum /= value;
    return this;
  }
  square = ( value = 2 ) => {
    this.sum = Math.pow(this.sum, value);
    return this;
  }
  squareRoot = () => {
      this.sum = Math.sqrt(this.sum);
      return this;
  }

  radius = value => {
    this.sum = Math.PI * Math.pow( value, 2 )
    return this;
  }

  total = () => {
    return `Total : ${this.sum}`
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
