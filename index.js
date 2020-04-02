'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
const newCal = new Calculator();
const newCal2 = new Calculator(9).squareRoot().output;
console.log(newCal.add(8).multiply(11).output);
console.log(newCal2);
console.log(newCal)