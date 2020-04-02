'use strict';

class Calculator {
	//write your code here
	constructor(param) {
		this.total = param;
	}
	add(angka1) {
		this.total += angka1;

		return this;
	}
	subtract(angka1) {
		this.total -= angka1;
		return this;
	}
	multiply(angka1) {
    this.total *= angka1;
		return this;
  }
	divide(angka1) {
    this.total /= angka1;
		return this;
  }
	square(pangkat) {
    this.total = this.total ** pangkat
    return this
  }
	squareRoot(angka) {
 this.total =  Math.sqrt(this.total)
   return this
  }
}
const obj1 = new Calculator(10);

obj1.add(6).subtract(5).multiply(10).divide(5).square(4).squareRoot(obj1.total)

console.log(obj1)

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator;
