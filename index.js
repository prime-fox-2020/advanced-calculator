'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

let myCalculator = new Calculator
myCalculator.add(10).divide(2).multiply(3).square(2).subtract(15)
console.log(myCalculator.result)

let AkarPangkat2 = new Calculator
AkarPangkat2.squareRoot(64)
console.log(AkarPangkat2.result)

let luasLingkaran = new Calculator
luasLingkaran.luasLingkaran(10)
console.log(luasLingkaran.result)

