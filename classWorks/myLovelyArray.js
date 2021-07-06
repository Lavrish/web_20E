"use strict";

// function declaration
myLovelyHelloWorld();

function helloWorld() {
    console.log("Hello World");
}

// helloWorld();

function myLovelyHelloWorld() {
    return "Greeting Hello World!";
}

myLovelyHelloWorld();
let userGreeting = myLovelyHelloWorld();

// console.log(userGreeting);

// function expression

//variable();

let variable = function () {
    // console.log();
    return "Test, Получилось ли?"
}
variable();
let variable2 = function () {
    console.log("Test, Получилось ли ? ");
};

// console.log(variable);
console.log(variable())

// void методы/функции  ----  возвратные/ return

// function declaration, function expression
/*
1. Точка с запятой, инициализация переменной это выражение и оно должно завершаться точкой с запятой.
2. Анонимная функция.
3. это функция недоступна до её написания.
*/

let user1 = [
    "Andrej",
    "Podlubnyj",
    "andron13",
    45,
    "Berlin",
    true
]

let week = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресение"
]

console.log(week[0]);  // i+1
// key -> value // kv

let newLibraryWeek = {  // javascript object notation
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресение"
}

console.log(newLibraryWeek[1])

const web20e = {
    teacher: "Андрей",
    studentAmount: 1,
    room: "Zoom"
}

let teacher = {
    firstname: "Andrej",
    secondName: "Podlubnyj",
    nickname: "andron13",
    email: "andron13@gmail.com",
    age: 45,
    city: "Berlin",
    hasDriverLicense: true,
    паспортПрививок: true,
    friends: ["Саша", "Маша", "Даша", "Глаша", "Миша"],
    computer:{
        serialNumber: 3549730597320,
        OS: "windows",
        age: 7,
    }
}


const championship = {
    germany: "Deutsche national manschaft",
    england: "Great britain "
}

// императивное программирование, ооп, функциональное программирование // реактивное программирование, аспектно-ориентированное программирование
















