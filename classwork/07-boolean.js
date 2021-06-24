"use strict";

// 02 dateFashion

function dateFashion(you, date) {
    if (you <= 2 || date <= 2) {
        return 0;
    } else if (you >= 8 || date >= 8) {
        return 2;
    } else {
        return 1;
    }
}

console.log(dateFashion(5, 10));
console.log(dateFashion(5, 2));
console.log(dateFashion(5, 5));