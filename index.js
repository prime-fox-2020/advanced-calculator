'use strict'

const Calculator = require("./calculator.js")
// keterangan
//   add() untuk tambah
    
//   subtract() untuk pengurangan
    
//   multiply() untuk perkalian
    
//   divide() untuk pembagian
    
//   square() untuk pangkat

//   squareRoot() untuk akar, tidak perlu diisi bilangannya!

//   luasLingkaran() untuk mencari luas lingkaran, bilangan yang diinput akan didefinisikan sebagai jari jari
  
//   kelilingLingkaran untuk mencari keliling lingkaran, bilangan yang diinput akan didefinisikan sebagai jari jari

// execute function on calculator.js in here
let calcu1 = new Calculator(7).add(3).subtract(5).multiply(5).squareRoot().square(3) //125


console.log(calcu1)
