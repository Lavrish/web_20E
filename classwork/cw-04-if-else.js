"use strict";

// Условный оператор

function summer(permission = false) {
    if (permission) {
        console.log("Я поеду в летний лагерь")
    } else {
        console.log("Я останусь на всё лето дома")
    }
}

// summer(true)
// summer(false)
// summer()

// function technicPermission(){
//     return false;
// }
//Первый вариант синтаксиса
let условие = false;
if (условие) {
    console.log("Программа что-то делает")
    console.log("Программа что-то делает")
    console.log("Программа что-то делает")
    console.log("Программа что-то делает")
} else {
    console.log("Программа остановилась")
}

function test(условие) {
    // Второй вариант написания
    if (условие)
        console.log("Программа что-то делает")
    else
        console.log("Программа остановилась")
    console.log("test")
}

test(true)


// третий вариант написания

if (условие) {
    console.log("Программа что-то делает")
} else {
    console.log("Программа остановилась")
}

// четвёртый

function f5(){
    if (условие) return true;
    else return false;
}

if (условие) {
    console.log("Программа что-то делает")
    console.log("Программа что-то делает")
    console.log("Программа что-то делает")
    console.log("Программа что-то делает")
} else {
    console.log("Программа остановилась")
}

