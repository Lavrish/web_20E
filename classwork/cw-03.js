"use strict";

function giveMeHotWater(water) {
    return `${water}миллилитров подогреваем до 90%`
}

function giveMeCoffee() {
    return "";
}

function giveMeMilk() {
    return "";
}

function giveMeCacao() {
    return "";
}

function giveMeSugar() {
    return "";
}

function hotDrinkWater(water, cacao, coffee, sugar, milk) {
    return (giveMeHotWater(water) +
        giveMeCoffee(cacao) +
        giveMeMilk(coffee) +
        giveMeCacao(sugar) +
        giveMeSugar(milk));
}

console.log(hotDrinkWater(100, 0, 0, 0, 0))
