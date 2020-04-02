'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

let a = new Calculator(10);
console.log(a.subtract(5).add(15).squareRoot().value);