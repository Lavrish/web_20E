"use strict";

// тернарный оператор, элвис оператор

function getMeMaxOldSchool(a, b) {
    if (a < b) {
        return b;
    } else {
        return a;
    }
}

function getMeMaxNewHipsterWay(a, b) {
    // переменная = (выражение) ? вариант - уно : вариант - дос;
    return (a < b) ? b : a;
}