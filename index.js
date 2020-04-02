'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let angka = new Calculator(2);

console.log(angka);
console.log(angka.add(5));
console.log(angka.subtract(4));
console.log(angka.multiply(4).divide(6));
console.log(angka.square(4).squareRoot(2));
console.log(angka.add(5).subtract(4).multiply(4).divide(5).square(2).squareRoot(4));
console.log(angka.circle());
