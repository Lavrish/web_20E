"use strict";

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

let x = 5;
console.log(x = x + 1);
x++;
console.log(x);

console.log([] + false - null + true);
console.log([] + false - null);

let y = 1;
let z = y = 2;
console.log(z);
console.log([] + 1 + 2);

let num1, num2, num3;
let str1, str2;
let str3 = "word";
let isDrive = false;

console.log(+[]);
console.log([""]);

console.log("1"[0]);
console.log(true + false)