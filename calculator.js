'use strict'

class Calculator {
  //write your code here
  constructor (number1) {
    this.number1 = number1
    // this.number2 = number2
    // this.addNum = this.add(num)
  }
  add (num) {
    console.log(`Angka ${this.number1} ditambah ${num} = ${this.number1 + num}`)
    this.number1 += num
    return this
  }
  subtract (num) {
    console.log(`Angka ${this.number1} dikurang ${num} = ${this.number1 - num}`)
    this.number1 -= num
    return this
  }
  multiply (num) {
    console.log(`Angka ${this.number1} dikali ${num} = ${this.number1 * num}`)
    this.number1 *= num
    return this
  }
  divide (num) {
    console.log(`Angka ${this.number1} dibagi ${num} = ${this.number1 / num}`)
    this.number1 /= num
    return this
  }
  square (num) {
    console.log(`Angka ${this.number1} dikuadrat ${num} = ${Math.pow(this.number1, num)}`)
    this.number1 = Math.pow(this.number1, num)
    return this
  }
  squareRoot () {
    console.log(`Akar dari Angka ${this.number1} = ${Math.sqrt(this.number1)}`)
    this.number1 = Math.sqrt(this.number1)
    return this
  }
  circleArea(){
    console.log(`Luas Lingkaran dengan radius ${this.number1} = ${Math.PI*Math.pow(this.number1,2)}`)
    this.number1 = Math.PI*Math.pow(this.number1,2)
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
