'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let operation = new Calculator(9) // invoke first input number

console.log(
  operation
  .add(2,13,12,41)
  .multiply(2)
  .square(0)
  .squareRoot(1)
  .multiply(operation.pi())
)

let circle = new Calculator(7)

console.log(
    circle
    .square(2)
    .multiply(circle.pi())
)