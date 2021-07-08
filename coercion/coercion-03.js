"use strict";

console.log(parseInt("-10"));
console.log(parseInt("-3.14"));
console.log(parseInt("5.9"));
console.log(parseInt("   10    "));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 лет"));
console.log(parseInt("лет 10"));

console.log(parseFloat("-3.14"));
console.log(parseFloat("5.9"));

let num = 4.567;
console.log(num.toFixed(1));
console.log(typeof num.toFixed(1));
// console.log(+num.toFixed(1));
console.log(num.toFixed(1) * 10 / 10);
//toExponential()
//toPrecision()

