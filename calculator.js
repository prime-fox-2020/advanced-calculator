'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.angka = angka
  }
  add (x) {
    this.angka += x
    return this
    
  }
  subtract (x) {
    this.angka -= x
    return this
  }
  multiply (x) {
    this.angka *= x
    return this
  }
  divide (x) {
    this.angka /= x
    return this
  }
  square (x) {
    this.angka = Math.pow(this.angka,x)
    return this
  }
  squareRoot (x) {
    this.angka = Math.pow(this.angka, 1/x)
    return this
  }
  circle(){
    this.angka = this.angka * this.angka * Math.PI
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
