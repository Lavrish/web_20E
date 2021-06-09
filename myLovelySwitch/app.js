"use strict";

function myVerySadStory(mathGrade) {
    // let mathGrade = 10; // mathGrade
    let prize = ""; // prise

    switch (mathGrade) {
        case 5:
            prize = "За пятёрку в четверти по математике папа обещал мне велосипед";
            break;
        case 4:
            prize = "За четвёрку я получу GoPro";
            break;
        case 1:
            prize = "Ой, лучше не спрашивайте";
            break;
        case 2:
            prize = "За двойку меня отругают";
            break;
        case 3:
            prize = "За тройку не будут ругать";
            break
        default:
            prize = "Такой оценки не существует";
            break;
    }
    return prize
}

console.log(myVerySadStory(5));;