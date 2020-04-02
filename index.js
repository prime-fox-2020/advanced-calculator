'use strict'

const Calculator = require("./calculator.js")
// execute function on calculator.js in here
let cal = new Calculator(10)
console.log(cal);
cal.add(2).subtract(1).multiply(2).divide(2).square(2).squareRoot().circleArea()
// console.log(cal);
