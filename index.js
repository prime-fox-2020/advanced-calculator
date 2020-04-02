'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let berhitung = new Calculator(2);

console.log(berhitung.add(2)); // ditambah 2
console.log(berhitung.subtract(1)); // dikurang 1
console.log(berhitung.multiply(3)); // dikali 3
console.log(berhitung.divide(3)); // dibagi 3
console.log(berhitung.square(2)); // Pangkat 2
console.log(berhitung.squareRoot()); // Akar 2
console.log(berhitung.add(berhitung.pi())); //mengambil nilai PI

