"use strict";

function findGreatWord(word) {
    let greatLetter = "я";
    let i = 0; // word.length
    do {
        let temp = word.charAt(i);
        temp = temp.toLowerCase();
        if (temp === greatLetter) {
            return true;
        }
        i++;
    } while (i < word.length)
    return false;
}

// console.log(findGreatWord(""));
// console.log(findGreatWord("яблоко"));
// console.log(findGreatWord("Яблоко"));
// console.log(findGreatWord("тыблоко"));

function digitPowTwo(num, pow = 2) {
    let i = 0;
    let result = 0;
    do {
        result = result + num;
        i++;
    } while (i < num)
    return result;
}

/*
console.log(digitPowTwo(5));
console.log(digitPowTwo(10));
console.log(digitPowTwo(4));
*/

function squirrelPlay(temperature, isSummer) {
    // if (temperature > 60 && temperature < 90) {
    //     return true;
    // } else if (isSummer && temperature >= 90 && temperature < 100) {
    //     return true;
    // } else {
    //     return false;
    // }

    // return (temperature > 60 && temperature < 90)
    //     || (isSummer && temperature >= 90 && temperature < 100)

    return temperature > 60 && (temperature < 90 || (isSummer && temperature < 100));
}

/*
console.log(squirrelPlay(70, false));
console.log(squirrelPlay(95, false));
console.log(squirrelPlay(95, true));
*/

function caughtSpeeding(speed, birthday) {
    let userSpeed = speed;
    if (birthday) {
        userSpeed = userSpeed - 5;
    }
    if (userSpeed >= 61 && userSpeed <= 80) {
        return 1;
    } else if (userSpeed >= 81) {
        return 2;
    } else {
        return 0;
    }
}

/*
console.log(caughtSpeeding(60, false)); // 0
console.log(caughtSpeeding(65, false)); // 1
console.log(caughtSpeeding(65, true));  // 0
console.log(caughtSpeeding(85, true));  // 1
console.log(caughtSpeeding(85, false));  // 2*/

/**
 * @author andron13
 *
 * @param out must be length 4
 * @param word
 * @returns {string}
 */
function makeOutWord(out, word) {
    return out.substring(0, 2) + word + out.substring(2);
}

/*console.log(makeOutWord('<<>>', 'Yay'));
console.log(makeOutWord('<<>>', 'WooHoo'));
console.log(makeOutWord('[[]]', 'word'));*/

function extraEnd(str) {
    return str.slice(-2) + str.slice(-2) + str.slice(-2);
}

/*console.log(extraEnd('Hello'));
console.log(extraEnd('ab'));
console.log(extraEnd('Hi'));*/

function firstTwoOne(str) {
    if (str.length <= 2) {
        return str;
    } else {
        return str.substring(0, 2);
    }
}

function firstTwoTwo(str) {
    return str.substring(0, 2);
}

console.log(firstTwoOne('Hello'));
console.log(firstTwoOne('abcdefg'));
console.log(firstTwoOne('ab'));