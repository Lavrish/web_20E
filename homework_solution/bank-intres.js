"use strict";
//Если клиент положил в банк 1000€ под 3,5%,
// какая сумма будет его ждать через семь лет? //

function findPercent(amount, percent, year) {
    let money = amount + amount / 100 * percent * year;
    return money;
}

let myMoney = findPercent(1000, 3.5, 7);
console.log(myMoney)