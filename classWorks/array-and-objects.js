"use strict";

let a = [1, 2, 3];
let b = a;  // пожалуйста скажи мне какая у тебя ссылка и дай мне её. я тоже буду ссылаться на эту ячейку.
// console.log(b);
// a[0] = 100;
// console.log(a);
// console.log(b)


let fix23 = function (arr) {
    let i = 0;
    while (i < arr.length - 1) {
        if (arr[i] === 2 && arr[i + 1] === 3) {
            arr[i + 1] = 0;
        }
        i++;
    }
    return arr;
}

// console.log(fix23([1, 2, 3]));

function myCopyArrayFunction(input) {
    let output = [];
    let i = 0;
    while (i < input.length) {
        output[i] = input[i];
        i++;
    }
    return output;
}

function fix23New(arr) {
    let output = myCopyArrayFunction(arr);
    let i = 0;
    while (i < output.length - 1) {
        if (output[i] === 2 && output[i + 1] === 3) {
            output[i + 1] = 0;
        }
        i++;
    }
    return output;
}

let myNewArr = [1, 2, 3];
console.log(fix23New(myNewArr));
console.log(myNewArr);




