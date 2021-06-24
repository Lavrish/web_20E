"use strict";

// loop-01-01 пельмень
function happyDumpling() {
    let i = 1;
    while (i <= 10) {
        if (i === 5) {
            console.log("Вот счастливый пельмень!");
            break;
        }
        console.log("Тестовая распечатка", i)
        i++;
    }
}

// happyDumpling();

// 02 На 3 без остатка
function divideByThree() {
    let i = 1;
    let amount = 0, count, temp, result, output, variable;
    while (i <= 100) {
        if (i % 3 === 0) {
            console.log(i, "делится на 3")
            amount++;
        }
        i++;
    }
    console.log(amount, "amount")
}

// divideByThree();

// 03 sum

function sum(a = 0, b = 0) {
    let result = 0;
    if (a === b) {
        result = a + b;
    } else {
        while (a <= b) {
            result += a;
            a++;
        }
    }
    return result;
}

// console.log(sum(2, 4));

//04 Последовательность (100)

function myLineOne(digit) {
    let i = 0;
    while (i <= digit) {
        i += 7
        if (i <= digit) {
            console.log(i);
        }
    }
}

// алгоритмическая сложность решения
function myLineTwo(digit) {
    let i = 1;
    while (i <= digit) {
        if (i % 7 === 0) {
            console.log(i)
        }
        i++;
    }
}

// myLineTwo(100);

// 05 multiplicationTable

function multiplicationTable(digit) {
    let i = 1;
    while (i <= 10) {
        // console.log(digit + "x" + i + "=" + digit * i);
        console.log(`${digit}x${i}=${digit * i}`);
        i++;
    }
}

// multiplicationTable(3);

// 08 countLeapYears

function leapYear(year) {
    // return year % 4 == 0;
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}

// console.log(countLeapYears(2000, 2020));

function countLeapYears(startYear, endYear) {
    let count = 0;
    let i = startYear;
    while (i <= endYear) {
        if (leapYear(i)) {
            count++;
        }
        i++;
    }
    return count;
}

// printLeapYears(2000, 2020)

function printLeapYears(startYear, endYear) {
    let i = startYear;
    while (i <= endYear) {
        if (leapYear(i)) {
            console.log(i)
        }
        i++;
    }
}

// 12 printSumInRub
// console.log(semanticRussian(202));

function semanticRussian(digit) {
    // 1. Узнать последнюю цифру и поработать с исключениями charat
    // 2. через модуло.
    let strInput = "" + digit;
    // let character = strInput.charAt(strInput.length - 1);
    let character = strInput.slice(strInput.length - 1);
    let output = "";
    let twoStrDigits = strInput.slice(strInput.length - 2)
    // console.log(twoStrDigits);

    if (twoStrDigits >= 11 && twoStrDigits <= 14) {
        output = "рублей";
    } else if (character == 1) {
        output = "рубль";
    } else if (character >= 2 && character <= 4) {
        output = "рубля";
    } else {
        output = "рублей";
    }
    return output;
}

printSumInRub(1, 21);

function printSumInRub(startMoney, endMoney) {
    let i = startMoney;
    while (i <= endMoney) {
        console.log(i, semanticRussian(i))
        i++;
    }
}