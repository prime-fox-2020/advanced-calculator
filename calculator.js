'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
    this.hasil = num
  }
  add (num) {
    console.log(`${this.hasil} tambah ${num}`)
    this.hasil += num
    return this
  }
  subtract (num) {
    console.log(`${this.hasil} kurang ${num}`)
    this.hasil -= num
    return this
  }
  multiply (num) {
    console.log(`${this.hasil} kali ${num}`)
    this.hasil *= num
  }
  divide (num) {
    console.log(`${this.hasil} bagi ${num}`)
    this.hasil /= num
    return this
  }
  square (num) {
    console.log(`${this.hasil} pangkat ${num}`)
    this.hasil = Math.pow(this.hasil,num)
    return this
  }
  squareRoot (num) {
    console.log(`${this.hasil} akar pangkat ${num}`)
    this.hasil = Math.pow(this.hasil, 1/num)
    return this
  }
  pi () {
    this.hasil *= Math.PI
    return this
  }
  circle () {
    let radius = this.hasil/2
    this.hasil = Math.round(Math.PI * radius * radius)
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
