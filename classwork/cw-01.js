"use strict";

function makeTea() {
    console.log("Делаю чай!");
}
// makeTea();

function makeHotWater(){
    console.log("Кипяточек на подходе!");
}

// makeHotWater();

function makeEspresso(){
    console.log("Ваш Эспрессо, сэр!!");
}

// makeEspresso();

function makeAmericano(){
    console.log("Ваш напиток, Американец!");
}

// makeAmericano();

function makeCaCao() {
    console.log("Како-Какао");

}

function valueNotFound() {
    console.log("Выбор не распознан!!");
}

function coffeeVendingMachine(number){
    switch(number){
        case 1:
            makeTea();
            break;
        case 2:
            makeHotWater();
            break;
        case 3:
            makeEspresso();
            break;
        case 4:
            makeAmericano();
            break;
        case 5:
            makeCaCao();
            // cacao;
            break;
        default:
            valueNotFound();
            break;
    }
}

coffeeVendingMachine(3);