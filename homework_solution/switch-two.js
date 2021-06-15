"use strict";

//Напишите программу, которая определяет сезон года. Месяца указаны number переменными.
// numer -> 10, 3.14
// Java int  - 10
// java float

function forSeasons(monthNumber) {
    let season = "";
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            // return "зима";
            season = "зима";
            break;
        case 3:
        case 4:
        case 5:
            // return "весна";
            season = "весна";
            break;
        case 6:
        case 7:
        case 8:
            // return "лето";
            season = "лето";
            break;
        case 9:
        case 10:
        case 11:
            // return "осень";
            season = "осень";
            break;
        default:
            // return "сезон +не определён";
            season = "сезон не определён";
    }
    season = "Выбранный вами сезон для отпуска  " + season
    return season;
}

console.log(forSeasons(10));