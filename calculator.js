'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.num = angka
  }
  add (angka) {
    this.num += angka
    return this 
  }
  subtract (angka) {
    this.num -= angka
    return this
  }
  multiply (angka) {
    this.num *= angka
    return this
  }
  divide (angka) {
    this.num /= angka
    return this
  }
  square (angka) {
    this.num = Math.pow(this.num,angka)
    return this
  }
  squareRoot (angka) {
    this.num = Math.pow(this.num,(1/angka))
    return this
  }
  circle (){
    this.num = Math.PI*this.num*this.num
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
