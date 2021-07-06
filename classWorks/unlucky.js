"use strict";

/* We'll say that a 1 immediately followed by a 3 in an array is an "unlucky"1.
Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

unlucky1([1, 3, 4, 5]) → true
unlucky1([2, 1, 3, 4, 5]) → true
unlucky1([1, 1, 1]) → false
*/

let unlucky1 = function (input) {
    let i = 0;
    let case1 = input[0] === 1 && input[1] === 3;
    let case2 = input[1] === 1 && input[2] === 3;
    let case3 = input[input.length - 2] === 1 && input[input.length - 1] === 3;
    return case1 || case2 || case3;
}

console.log(unlucky1([1, 3, 4, 5]));
console.log(unlucky1([2, 1, 3, 4, 5]));
console.log(unlucky1([1, 1, 1]));