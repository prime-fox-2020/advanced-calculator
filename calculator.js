'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.result = number;
  }
  add (num) {
    this.result += num;
    return this;
  } 
  subtract (num) {
    this.result -= num;
    return this;
  }
  multiply (num) {
    this.result *= num;
    return this;
  }
  divide (num) {
    this.result /= num;
    return this;
  }
  square (num) {
    this.result = Math.pow(this.result, num);
    return this;
  }
  squareRoot (num) {
    this.result = Math.pow(this.result, 1/num);
    return this;
  }

  circle (){
    const pi = 3.14;
    this.result = pi * this.square(2).result;
    return this;
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
