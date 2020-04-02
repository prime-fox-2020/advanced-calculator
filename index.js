'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

const tambah= new Calculator(6)
console.log(tambah.add(5))

const kurang = new Calculator(7)
console.log(kurang.subtract(4))

const kali = new Calculator(4)
console.log(kali.multiply(5))

const bagi = new Calculator(9)
console.log(bagi.divide(3))

const squaree = new Calculator(4)
console.log(squaree.square(4))

const sqroot = new Calculator(3)
console.log(sqroot.squareRoot(3))

const pi = new Calculator(5)
console.log(pi.phi())

const result = new Calculator(4)
console.log(result.add(18).subtract(10).multiply(2).divide(2).square(2).squareRoot(2).phi())