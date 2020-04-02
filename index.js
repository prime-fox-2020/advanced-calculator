'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

let cobaSatu = new Calculator(20)

cobaSatu.add(20).subtract(10)
// 20 + 10 - 10 = 30
console.log(cobaSatu)


let cobaDua = new Calculator(10)
// 10 * 20 / 4 = 50
cobaDua.multiply(20).divide(4)
console.log(cobaDua)

let cobaTiga = new Calculator(6)
// 6^2 / 2 = 18
cobaTiga.square().divide(2)
console.log(cobaTiga)

let cobaEmpat = new Calculator(11)
// 11 ^ 4 = 11 x 11 x 11 x 11= 14641
cobaEmpat.pangkat(4)
console.log(cobaEmpat)

let cobaLima = new Calculator(15625)
// sqrt(15625) = 125 --> cbrt(125) = 5
cobaLima.squareRoot().akarTIga()
console.log(cobaLima)

let hasilLuas = new Calculator(7)
hasilLuas.luasLingkaran()
console.log(hasilLuas)

let hasilKell = new Calculator(14)
hasilKell.kellLingkaran()
console.log(hasilKell)

let hasil = new Calculator(2)
// 2 ^ 10 / 10 = 102.4
hasil.pangkat(10).divide(10)
console.log(hasil)
