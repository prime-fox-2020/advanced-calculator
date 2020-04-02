'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here


let input = new Calculator() // <--- input angka pertama disini

// Masukan method dan angka yang di inginkan
// .add() = untuk penjumlahan
// .substract() = untuk pengurangan
// .multiply() = untuk perkalian
// .divide() = untuk pembagian
// .square() = untuk pangkat
// .squareRoot() = untuk akar
// .Pi() = untuk mengalikan dengan Pi

input.add(1).Pi().subtract(3)

console.log(input);
