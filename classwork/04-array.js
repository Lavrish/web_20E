"use strict";

// массив

let arr1 = [];
let arr2 = new Array();  // просто для ознакомления
let arr3 = [0, 1, 1, 2, 3, 5, 8, 13];
let arr4 = new Array(21, 34, 55); // просто для ознакомления
let arr5 = [true, false, true, false, false, true, false];
let arr6 = [
    true,
    0,
    false,
    "GORODA",
    1,
    true,
    [
        1,
        2,
        3
    ]
]
let arr7 = ["дом", "улица", "фонарь", "аптека"];

let word = "andrej";
let arrayWord = ["a", "n", "d", "r", "e", "j"]; // каждая строка это массив символов
let trueArrayWord = [60, 65, 80, 45];

let germanCites = [
    "Берлин",
    "Дрезден",
    "Кёльн",
    "Франкфурт",
    "Мюнхен",
    "Дюссельдорф"
];

console.log(germanCites[0]);
console.log(germanCites[germanCites.length - 1]);
let arraySize = germanCites.length;

// всегда

// console.log(germanCites);

germanCites[3] = "Liebenwalde";
console.log(germanCites)

// update

let bigNumber = [5, 10];
console.log(Math.max(bigNumber[0], bigNumber[1]));

// CRUD  - https://en.wikipedia.org/wiki/Create,_read,_update_and_delete

// create

germanCites[6] = "BigCity";  // не хороший способ
console.log(germanCites);
germanCites[germanCites.length] = "Совсем новый город";  // тоже не рекомендуется
console.log(germanCites)

// push

let belarusCities = [
    "Minsk",
    "Mogilev",
    "Mozyr"
]

belarusCities.push("Mosty");
console.log(belarusCities)

// unshift

belarusCities.unshift("Мархачевщина");
console.log(belarusCities);

// delete : pop, shift

belarusCities.pop(); //удаление последнего элемента
console.log(belarusCities);
belarusCities.shift();  // удаление НУЛЕВОГО элемента
console.log(belarusCities);

console.log("Длина массива НА ДАННЫЙ МОМЕНТ", belarusCities.length)

let simpelArr = [];
console.log(simpelArr.length);
simpelArr.length = 10;  // без профессионалкьной подготовки не повторять
console.log(simpelArr.length)
console.log(simpelArr)
console.log(simpelArr[0])
let a;
console.log(a)

let arrayUser = [
    "andrej", //0
    "podlubnyj", //1
    ["Сярожа", "Дима", "Света"]
];
// let user = {
//     firstname: "Andrej",
//     lastname:  "Podlubnyj",
//     friends: ["Сярожа", "Дима", "Света"],
//     email: ""
// };

let magicArray = new Array(10); // метод создания массива
console.log(magicArray);
console.log(magicArray[0]);
console.log(magicArray.length);