'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
const theCalculator = new Calculator()

console.log(theCalculator.circle(7))

console.log(theCalculator.circle(7).add(2).subtract(5).multiply(2).divide(2).square(2).squareRoot(4));