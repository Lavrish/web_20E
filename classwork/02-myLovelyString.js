"use strict";

// length
let str1 = "HELLO WORLD!";
let str2 = "";
let str3 = ' ';
console.log(str1.length, "длина первого стринга")
console.log(str2.length, "длина второго стринга")
console.log(str3.length, "длина третьего стринга")

// charAt()
console.log("------------------charAt()--------------------------")
let hausmaster = "Василий";
let profession = "Hausmaster";

let charIndex = hausmaster.charAt(0);
let charIndex2 = hausmaster.charAt(hausmaster.length - 1);
console.log(charIndex);
console.log(charIndex2);

// indexOf()
console.log("-------------------- indexOf() ------------------")

let myChar = hausmaster.indexOf("силий");
console.log(myChar)