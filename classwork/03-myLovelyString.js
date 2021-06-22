"use strict";

// lastindexof

let hausmaster = "ЯаВасилийЯ";
console.log(hausmaster.lastIndexOf("Я"));

// substring

let str = "HELLO WORLD!";
let result = str.substr(1, 4);
console.log(result);
let result2 = str.substr(-2);
console.log(result2);
let result3 = str.substr(4);
console.log(result3);
let result4 = str.substr(100);
console.log(result4);
//

// slice() substr  substring
str = "HELLO WORLD!";
console.log("----------------slice() substr  substring----------------------")
let resultSlice = str.slice(1, 8);
console.log(resultSlice)
let resultSlice2 = str.slice(3, -2);
console.log(resultSlice2);
let resultSlice3 = str.slice(3);
console.log(resultSlice3);
let resultSlice4 = str.slice(-3);
console.log(resultSlice4);
let resultSlice5 = str.slice(100);
console.log(resultSlice5);

// substring
str = "Василий";
let case1 = str.substring(3, 6);
console.log(case1);
let case2 = str.substring(3);
console.log(case2);
// let case3 = str.substring(100);
console.log(case3);
