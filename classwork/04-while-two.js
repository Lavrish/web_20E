"use strict";
// scope var, let, const
let i = 0;

while (i < 6) {
    i++;
    let k;
}

console.log("i", i);

while (i < 10) {
    i++;
    let c = 50;
}

console.log("i", i);

{
    let b = 100;
    console.log("b", b);
}

// console.log(c)
// console.log("b", b);