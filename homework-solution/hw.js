"use strict";

// /* Given an number n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.
/*
function diff21(n) {
    if (n > 21) {
        return 2 * (n - 21);
    } else {
        return 21 - n;
    }
}

console.log(diff21(19)); // 2
console.log(diff21(10));// 11
console.log(diff21(21)); //0
console.log(diff21(40)); //38*/

// В девятом классе Вася ездил со своим и параллельным классом в Париж.
// Известно, что на двоих учителей нельзя брать в поездку больше 25 детей.
// Напишите проверочный метод
// paris(11, 15) -> false
// paris(11, 5) -> true

// function paris(group1, group2) {
//     return (group1 + group2) <= 25;
// }
//
// console.log(paris(11,15));
// console.log(paris(11,5));

/* The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation.
We sleep in if it is not a weekday OR we’re on vacation. Return true if we sleep in. */
// sleepIn(false, false) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

function sleepIn(weekday, vacation) {
    return !weekday || vacation;
}

console.log(sleepIn(false, false)); //true
console.log(sleepIn(true, false)) // false
console.log(sleepIn(false, true)) // true

function leapYearChecker(year) {
    return year % 4 === 0;
}

let a = 10;
let b = "Andrej";

/*
= - знак присваивания
== магическое равенство  0 == "0"
=== никакой магии нет. это обычное равенство.
!=
!==
 */