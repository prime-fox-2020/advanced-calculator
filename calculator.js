'use strict'

class Calculator {
    //write your code here
    constructor (angka1, angka2) {
        this.angka1 = angka1;
        this.angka2 = angka2;
    }
    add() {
        console.log(this.angka1 + this.angka2);
        return this;
    }
    subtract() {
        console.log(this.angka1 - this.angka2);
        return this;
    }
    multiply() {
        console.log(this.angka1 * this.angka2);
        return this;
    }
    divide() {
        console.log(this.angka1 / this.angka2);
        return this;
    }
    square() {
        console.log(Math.pow(this.angka1, this.angka2));
        return this;
    }
    squareRoot() {
        if (this.angka2 === 2) {
            console.log(Math.sqrt(this.angka1));
            return this;
        }
        else if (this.angka2 === 3) {
            console.log(Math.cbrt(this.angka1));
            return this;
        }
        else {
            console.log(Math.pow(this.angka1, 1/this.angka2))
            return this;
        }
    }
    circle() {
        console.log(Math.round(Math.PI * (Math.pow(this.angka1, 2))));
        return this;
    }
}

const obj = new Calculator (9,2)
console.log(obj.square().squareRoot().circle());

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
