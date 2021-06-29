"use strict";
// Округление
console.log("Округление");

let myNumber = 23.13;
let var1 = Math.ceil(myNumber);
let var2 = Math.floor(myNumber);
let var3 = Math.round(myNumber);

console.log(var1);
console.log(var2);
console.log(var3);

// Math.random();

let digit = Math.random();
console.log(digit);

// 10 do 100:
function myRandomFunction(min, max) {
    // let random = 1;
    let result = Math.round(Math.random() * (max - min)) + min
    return result;
}

let myDigit = myRandomFunction(0, 100);

function truthFunction() {
    // if (Math.round(Math.random()) == 0) {
    //     return false
    // } else {
    //     return true;
    // }
    return Math.round(Math.random()) === 1;
}

console.log(truthFunction())
