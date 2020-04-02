'use strict'

class Calculator {

  //Attributes
  constructor (num, pi) {
    // this.consSentence = kalimat
    this.consResult = num
    this.consCircle = pi
  }

  //Methods
  add (num1) {
    this.consResult += num1
    return this
  }
  subtract (num1) {
    this.consResult -= num1
    return this
  }
  multiply (num1){
    this.consResult *= num1
    return this
  }
  divide (num1){
    this.consResult /= num1
    return this
  }
  square (num1){
    this.consResult **= num1
    return this
  }
  squareRoot () {
    this.consResult = Math.sqrt(this.consResult)
    console.log(`Hasil dari (+,-,*,/,**,√) adalah ${this.consResult}`)
    return this
  }

  luasCircle(num2){
    this.consCircle *= (num2 ** 2)
    console.log(`Hasil luas lingkaran adalah ${this.consCircle}`)
    return `Hasil luas lingkaran adalah ${this}`
  }
}

// Make Object by Class
let hitung1 = new Calculator(2, 3.14)
hitung1.add(10).subtract(2).multiply(3).divide(10).square(2).squareRoot(3)
hitung1.luasCircle(2)//3.14 x (2**2)
console.log(hitung1)

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
