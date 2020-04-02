'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.angka = angka
  }
  add (angka) {
    this.angka += angka
    return this
  }
  subtract (angka) {
    this.angka -= angka
    return this
  }
  multiply (angka) {
    this.angka *= angka
    return this
  }
  divide (angka) {
    this.angka /= angka
    return this
  }
  square (pangkat) {
    this.angka = Math.pow(this.angka, pangkat)
    return this
  }
  squareRoot () {
    this.angka = Math.sqrt(this.angka)
    return this
  }
  luasLingkaran(angka){
    const pi = 3.14
    this.angka = pi * this.angka * this.angka
    return this
  }
  kelilingLingkaran(angka){
    const pi = 3.14
    this.angka = pi * (this.angka + this.angka)
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
