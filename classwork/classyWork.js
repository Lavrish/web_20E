"use strict";

//Logic

function love6(a, b) {
    return a === 6 || b === 6 || a + b === 6 || Math.abs(a - b) === 6;
}

function in1To10(n, isOutsideMode) {
    if (n >= 1 && n <= 10 && !isOutsideMode) {
        return true;
    } else if (isOutsideMode && (n <= 1 || n >= 10)) {
        return true;
    } else {
        return false;
    }
}

/*console.log(
    "07 love6 \n" +
    love6(6, 4),
    love6(4, 5),
    love6(5, 11),
    love6(1, 5),
    "\n08 in1To10 \n" +
    in1To10(5, false),
    in1To10(11, false),
    in1To10(11, true)
)*/

//String

function nonStart(str1, str2) {
    return str1.substring(1) + str2.substring(1);
}

function left2(str) {
    return str.substring(2) + str.substring(0, 2)
}

// console.log(
//     "10 nonStart \n" +
//     nonStart('Hello', 'There'),
//     nonStart('java', 'code'),
//     nonStart('shotl', 'java'),
//     "\n11 left2 \n" +
//     left2('Hello'),
//     left2('java'),
//     left2('Hi')
// )

function findMin(arr) {
    let i = 1;
    let output = arr[0];
    do {
        if (arr[i] < output) {
            output = arr[i];
        }
        i++;
    } while (i < arr.length)
    return output
}

function findMax(arr) {
    let i = 1;
    let output = arr[0];
    while (i < arr.length)
    {
        if (arr[i] > output) {
            output = arr[i];
        }
        i++;
    }
    return output
}

function arrSum(arr){
    let i = 0;
    let output = 0;
    while (i < arr.length){
        output = output + arr[i];
        i++;
    }
    return output
}

/*console.log(
    findMin([1,2,3]),
    findMin([5,11,9]),
    findMin([0,7,1,3]), + "\n",
    findMax([1,2,3]),
    findMax([5,11,9]),
    findMax([0,7,1,3]), + "\n",
    arrSum([1,2,3]),
    arrSum([5,11,9]),
    arrSum([0,7,1,3])
)*/

