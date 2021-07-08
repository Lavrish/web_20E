"use strict";

// Given an array of ints length 3, return the sum of all the elements.

/*
sum3([1, 2, 3]) → 6
sum3([5, 11, 2]) → 18
sum3([7, 0, 0]) → 7
*/

function sum3(array) {
    let result = 0;
    let i = 0;
    while(i < array.length){
        result += array[i];
        i++;
    }
    return result;
}

// for (let i = 0; i < array.length; i++) {
//     // result = result + array[i];
//     result += array[i];
// }
console.log(sum3([1, 2, 3]))
// console.log(sum3([5, 11, 2]));
// console.log(sum3([7, 0, 0]))
// console.log(sum3([1, 2, 3,5]))