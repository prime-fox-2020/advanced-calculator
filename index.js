'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let instance = new Calculator

instance.add(2).squareRoot(2).circleArea()

console.log(instance)
