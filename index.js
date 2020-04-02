'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

let num = new Calculator(10)

num.add(2).subtract(5).multiply(5).divide(7).square(2).squareRoot(2).circle()

console.log(num)