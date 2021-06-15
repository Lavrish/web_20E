"use strict";

/*
Родители Васи Сидорова купили умный сейф и запрограммировали его на выдачу денег по отпечатку пальцев одного из родителей.
smartDepositBox(true, false) -> true
smartDepositBox(false, true) -> true
smartDepositBox(false, false) -> false
 */
function smartDepositBox(papaPermission, mamaPermission) {
    return papaPermission || mamaPermission;
}

// console.log(smartDepositBox(true, false)); // true
// console.log(smartDepositBox(false, true)); // true
// console.log(smartDepositBox(false, false)); // false

// smartDepositBoxVersionTwo(true, false) -> false
// smartDepositBoxVersionTwo(false, true) -> false
// smartDepositBoxVersionTwo(false, false) -> false
// smartDepositBoxVersionTwo(true, true) -> true

function smartDepositBoxVersionTwo(papaPermission, mamaPermission) {
    return papaPermission && mamaPermission;
}

// console.log(smartDepositBoxVersionTwo(true, true));

// verySmartDepositBoxVersionThree(mamaPermission, papaPermission, omaPermission)

function verySmartDepositBoxVersionThree(mamaPermission, papaPermission, omaPermission) {
    // return omaPermission || smartDepositBoxVersionTwo(mamaPermission, papaPermission);
    return omaPermission || (mamaPermission && papaPermission)
}

// console.log(verySmartDepositBoxVersionThree(true, true, false))

/*
bigBadaBoom(true, true) -> true
bigBadaBoom(false, false) -> false
bigBadaBoom(true, false) -> false
 */

function bigBadaBoom(cap1, cap2) {
    return cap1 && cap2;
}

// console.log(bigBadaBoom(true, false))
// console.log(bigBadaBoom(true, true))
//
// doorbell(true, true) -> false
// doorbell(false, false) -> false
// doorbell(true, false) -> true

function doorbell(bell1, bell2) {
    return (bell1 && !bell2) || (bell2 && !bell1);
}

console.log(doorbell(true, true)) // false
console.log(doorbell(false, true)) // true
console.log(doorbell(true, false)) // true
console.log(doorbell(false, false)) // false