'use strict'

class Calculator {
  constructor (num) {
    this.num = num
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
  square () {
    this.num = Math.pow(this.num, 2)
    return this
  }
  squareRoot () {
    this.num = Math.sqrt(this.num)
    return this
  }
  cubeRoot () {
    this.num = Math.cbrt(this.num)
    return this
  }
  root (angka) {
    this.num = Math.pow(this.num, 1/angka)
    return this
  }
  power (angka) {
    this.num = Math.pow(this.num, angka)
    return this
  }

  areaCircle() {
    this.num = Math.PI * Math.pow(this.num, 2)
  }
  circumferenceCircle() {
    this.num = Math.PI * (this.num * 2)
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
