console.log(
    " Max SAFE : " + Number.MAX_SAFE_INTEGER +
    "\n MIN SAFE      " + Number.MIN_SAFE_INTEGER +
    "\n NaN      " + Number.NaN +
    "\n negative infinity     " + Number.NEGATIVE_INFINITY +
    "\n positiver infinity       " + Number.POSITIVE_INFINITY
);

let x = 13;  // integer value
let pi = 3.14; // floating point value
const PI = Math.PI;
console.log(pi)
console.log(PI)
let Pi, pI;

let exp = 12e3; // value = 12*10^3 = 12000
let exp2 = 1e-1; // 0.1

console.log(exp)
console.log(exp2)

// строка в число
let myLittleString = "2021";
let myNewNumberchen = +myLittleString;
console.log(myLittleString)
console.log(myNewNumberchen)
//вариант два

console.log(Number.parseInt("12"));
console.log(Number.parseFloat("12.45"));
console.log(Number.parseFloat("12"));
console.log(Number.parseFloat("а-12"));

// из числа в строку

console.log("" + 12)
console.log(12 + 12 + "" + 28 + 45)
let abcd = 1969;
console.log(abcd.toString(), "это строка")
console.log(324)
console.log((324).toString(), "это тоже строка")