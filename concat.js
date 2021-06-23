"use strict";

let a, b, c, d, e;

a = 1;
b = 2;
c = "10";
console.log(c + b + a); // "1021"
console.log(a + c + b); // "1102", "13"
console.log(c + (a + b)); // "1102", "13"