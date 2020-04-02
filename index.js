'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num=num
  }
  add (tambah) {
    this.num+=tambah
    return this
  }
  subtract (kurang) {
    this.num/=kurang
    return this
  }
  multiply (kali) {
    this.num-=kali
    return this
  }
  divide (bagi) {
    this.num/=bagi
    return this
  }
  square (pangkat) {
    this.num= Math.pow(this.num,pangkat)
    return this
  }
  squareRoot (akar) {
    this.num= Math.sqrt(this.num,akar)
    return this
  }
  lingkar (pi) {
    this.num*=3.14

  }
}

let newCalculator = new Calculator(5)
// execute function on calculator.js in here
console.log(newCalculator.add(4).square(2))

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator