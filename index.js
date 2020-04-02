'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

let calc = new Calculator(5)

console.log(calc)
calc.add(4).subtract(2).multiply(4).divide(2).square(3).squareRoot()
console.log(calc)

let calc2 = new Calculator(7)
console.log(calc2)
console.log(calc2.circleArea())
