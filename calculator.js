'use strict'

class Calculator {
  //write your code here
  constructor(number) {
    this.hasil = number
  }
  add(number) {
    console.log(`${this.hasil} + ${number} = ${this.hasil += number}`);
    return this
  }
  subtract(number) {
    console.log(`${this.hasil} - ${number} = ${this.hasil -= number}`);
    return this
  }
  multiply(number) {
    console.log(`${this.hasil} * ${number} = ${this.hasil *= number}`);
    return this
  }
  divide(number) {
    console.log(`${this.hasil} / ${number} = ${this.hasil /= number}`);
    return this
  }
  square(number) {
    console.log(`${this.hasil} ^ ${number} = ${this.hasil = Math.pow(this.hasil, number)}`);
    return this;
  }
  squareRoot() {
    console.log(`Akar dari angka ${this.hasil} = ${Math.sqrt(this.hasil)}`);
    this.hasil = Math.sqrt(this.hasil)
    return this
  }
  circleArea() {
    console.log(`Luas lingkaran radius ${this.hasil} = ${Math.PI * Math.pow(this.hasil, 2)}`)
    this.hasil = Math.PI * Math.pow(this.hasil, 2)
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
