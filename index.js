'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

let hasilHitungan = new Calculator(10);

hasilHitungan.add(5).subtract(10).multiply(20).divide(5).square(3).squareRoot(2).circle();

console.log(hasilHitungan);