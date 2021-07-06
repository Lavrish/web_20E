"use strict";

let a = 5;
let b = 7;
let c = a;
console.log(a);
console.log(c);
a = a * 2;
c = c - 2;
console.log("a", a);
console.log("c", c);

let myArrayInput = [a, b, c];
console.log(myArrayInput);

function copyArray(arr) {
    let output = [];
    output[0] = arr[0];
    output[1] = arr[1];
    output[2] = arr[2];
    return output;
}

let newArray = copyArray(myArrayInput);
myArrayInput[0] = 314;
console.log(newArray);
console.log(myArrayInput);

function copyArrayForPeopleWhoCanLoop(arr) {
    let output = [];
    let i = 0;
    while (i < arr.length) {
        output[i] = arr[i];
        i++;
    }
    return output;
}