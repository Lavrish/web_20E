"use strict";
console.log("Hello world");

let num = 10;
let veryBigInt = 489574395834334n;
let str = "сообщение!";
let isTrue = true;
let fourSeasons = ["Вивальди", "Стивен Кинг", "Гостиница"];
let admin = {firstname: "John Doe"};
let func = function () {
}
let undef = undefined;
let nothing = null;
let notANUmber = NaN;
let inf = Infinity;

console.log("num :", typeof num);
console.log("number" === typeof num);
console.log("number" == typeof num);
console.log("veryBigInt :", typeof veryBigInt);
console.log("veryBigInt :", typeof veryBigInt);
console.log(str, typeof str)
console.log("isTrue :", typeof isTrue);
console.log("fourSeasons :", typeof fourSeasons);
console.log("admin :", typeof admin);
console.log("func :", typeof func);
console.log("undef :", typeof undef);
console.log("nothing :", typeof nothing);
console.log("notANUmber :", typeof notANUmber);
console.log("inf :", typeof inf);
let b = 10 / "ups";
console.log(b)
