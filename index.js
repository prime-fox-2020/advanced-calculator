'use strict'

const Calculator = require("./calculator.js")


// Saat new instance invoke dengan 
// nilai awal yang akan di operasikan
// default = 0
let Cal = new Calculator(2)

console.clear();
console.log(Cal.add(5).result)
console.log(Cal.subtract(5).result)
console.log(Cal.multiply(4).result)
console.log(Cal.divide(2).result)
console.log(Cal.square().result)
console.log(Cal.powerOf(5).result)
console.log(Cal.squareRoot(25).result)
console.log(Cal.circleArea(10))

console.log('\n ======== Chain ==========')
let Calc = new Calculator(2)
console.log(Calc.add(5).subtract(5).result);
console.log(Calc.add(5).subtract(5).multiply(4).divide(2).subtract(7).result);


// execute function on calculator.js in here
