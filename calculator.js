'use strict'

class Calculator {
  //write your code here
  constructor (angka = 0) {
    this.hasil = angka;
    return this;
  }
  add (angka) {
    this.hasil += angka;
    return this;
  }
  subtract (angka) {
    this.hasil -= angka;
    return this;
  }
  multiply (angka) {
    this.hasil *= angka;
    return this;
  }
  divide (angka) {
    this.hasil /= angka;
    return this;
  }
  square (angka) {
    this.hasil = Math.pow(this.hasil, angka);
    return this;
  }
  squareRoot () {
    this.hasil = Math.sqrt(this.hasil);
    return this;
  }
  pi () {
    return Math.PI;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator;
