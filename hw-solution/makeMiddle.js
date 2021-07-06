"use strict";

/*
Given an array of ints of even length,
return a new array length 2 containing the middle two elements from the original array.
 The original array will be length 2 or more.
makeMiddle([1, 2, 3, 4]) → [2, 3]
makeMiddle([7, 1, 2, 3, 4, 9]) → [2, 3]
makeMiddle([1, 2]) → [1, 2]
*/

let makeMiddle = function (arr) {
    const output = new Array(2);
    let myMiddle = arr.length / 2;
    output[0] = arr[myMiddle - 1];
    output[1] = arr[myMiddle];
    return output;
    // return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
}
console.log(makeMiddle([1, 2, 3, 4]));
console.log(makeMiddle([7, 1, 2, 3, 4, 9]));
console.log(makeMiddle([1, 2]));
console.log(makeMiddle([5, 6, 7, 8, 9, 10]));