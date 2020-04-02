'use strict'

class Calculator {
  constructor(num) {
    this.result = num;
    this.pi = 3.1416;
  }

  add(num) {
    console.log(`${this.result} + ${num} = ${this.result += num}`);
    return this;
  }
  subtract(num) {
    console.log(`${this.result} - ${num} = ${this.result -= num}`);
    return this;
  }
  multiply(num) {
    console.log(`${this.result} * ${num} = ${this.result *= num}`);
    return this;
  }
  divide(num) {
    console.log(`${this.result} / ${num} = ${this.result /= num}`);
    return this;
  }
  square(num) {
    console.log(`${this.result} ^ ${num} = ${this.result = Math.pow(this.result, num)}`);
    return this;
  }
  squareRoot() {
    console.log(`√${this.result} = ${this.result = Math.sqrt(this.result)}`);
    return this;
  }
  /**
   * Calculate area or circumference of a circle from given radius;
   * @param {string} mode 'area' | 'circumference'
   */
  circle(mode = 'area') {
    if (mode == 'area') {
      console.log(`Luas lingkaran berjari-jari ${this.result} adalah ${this.result *= this.result * this.pi}`);
    } else if (mode == 'circumference') {
      console.log(`Keliling lingkaran berjari-jari ${this.result} adalah ${this.result *= 2 * this.pi}`);
    }
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */
let calc = new Calculator(5).add(7).subtract(3).multiply(2).divide(6).square(4).squareRoot().subtract(2);
// console.log(calc.result);

// calc.circle('circumference');
calc.circle('area');
// console.log(calc.result);
module.exports = Calculator