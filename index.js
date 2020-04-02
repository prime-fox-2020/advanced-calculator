'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

let testCase1 = new Calculator(2)

testCase1.add(15).subtract(5)
// 2 + 15 - 5 = 12
console.log(testCase1.num)


let testCase2 = new Calculator(10)
// 10 * 15 / 5 = 30
testCase2.multiply(15).divide(5)
console.log(testCase2.num)

let testCase3 = new Calculator(15)
// 15^2 / 5 = 45
testCase3.square().divide(5)
console.log(testCase3.num)

let testCase4 = new Calculator(9)
// 9 ^ 3 = 9 x 9 x 9 = 729
testCase4.power(3)
console.log(testCase4.num)

let testCase5 = new Calculator(1000000)
// sqrt(1000000) = 1000 --> cbrt(1000) = 10
testCase5.squareRoot().cubeRoot()
console.log(testCase5.num)

let rad = new Calculator(7)
rad.areaCircle()
console.log(rad.num)

let rad2 = new Calculator(14)
rad2.circumferenceCircle()
console.log(rad2.num)

let finalCase = new Calculator(152)
// (152 x 52 / 4 + 1025 - 522)^4
finalCase.multiply(52).divide(4).add(1024).subtract(522).power(4)
console.log(finalCase.num)


//checking general root method
let testCaseRoot = new Calculator(729) // akan ada galat perhitungan
testCaseRoot.root(3)
console.log(testCaseRoot.num)