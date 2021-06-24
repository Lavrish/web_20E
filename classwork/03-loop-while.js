"use strict";

/**
 *
 * @param weekday is positive integer
 */
function myFirstLoopWhile(weekday) {
// пока
    let output = ""
    while (weekday <= 5) {
        output = `Я встаю в семь утра
        Завтракаю
        чищу зубы
        иду на работу
        работаю 8 часов
        прихожу с работы
        курю с соседом на лестничной площадке
        смотрю программу время
        иду спать`;
        console.log("День недели", weekday, output);
        // weekday = weekday + 1;
        // weekday += 1;
        // ++weekday;
        weekday++;
    }
}

myFirstLoopWhile(1);
