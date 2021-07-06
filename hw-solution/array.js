"use strict";

// Given an int array length 2, return true if it does not contain a 2 or 3.
// no23([4, 5]) → true
// no23([4, 2]) → false
// no23([3, 5]) → false

function no23(array) {
    // return (array[0] !==2 && array[1] !==2 && array[0] !==3 && array[1] !==3);
    let i = 0;
    while (i < array.length) {
        if (array[i] === 2 || array[i] === 3) {
            return false;
        }
        i++;
    }
    return true;
}

/*console.log(no23([4, 5]));
console.log(no23([4, 2]));
console.log(no23([3, 5]));
console.log(no23([2, 3])); false
console.log(no23([2, 8])); false*/

//Given an int array length 3,
// if there is a 2 in the array immediately followed by a 3,
// set the 3 element to 0. Return the changed array.
// fix23([1, 2, 3]) → [1, 2, 0]
// fix23([2, 3, 5]) → [2, 0, 5]
// fix23([1, 2, 1]) → [1, 2, 1]

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
// console.log(fix23([2, 3, 5]));
// console.log(fix23([1, 2, 1]));

const a1 = [1, 2, 3];
a1[0] = 5;
// console.log(a1);
// Простые типы данных. от сложных

let simpleVariable = 5;
let b = simpleVariable;
simpleVariable++;
// console.log("b", b);
// console.log("simpleVariable", simpleVariable);

let notSimplevariable = [1, 2, 3, 4, 5, 6, 7, 8, 1000000];

