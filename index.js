'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let calc = new Calculator();
calc.add(5).multiply(2).subtract(2);
console.log(calc.total())
calc.radius(9);
console.log(calc.total())