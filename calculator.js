'use strict'

class Calculator {
  //write your code here
  constructor (value) {
    this.value= value
  }
  add (number) {
    this.value+=number
    return this
  }
  subtract (number) {
    this.value-=number
    return this
  }
  multiply (number) {
    this.value*=number
    return this
  }
  divide (number) {
    this.value/=number
    return this
  }
  square () {
    this.value = Math.pow(this.value, 2)
    return this
  }
  squareRoot () {
    this.value=Math.sqrt(this.value)
    return this
  }
  luasLingkaran(){
    this.value = Math.PI * Math.pow(this.value, 2)
    return this
  }
  kellLingkaran(){
    this.value=2*Math.PI*this.value
    return this
  }
  pangkat(number){
    this.value**=number
    return this
  }
  akarTIga(){
    this.value = Math.cbrt(this.value)
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
