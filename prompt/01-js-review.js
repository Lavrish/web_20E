"use strict";
// alert("hello");
//prompt();
// ctrl + plus + разделить
// вызвать комментарии
//

// let question = "Сколько тебе лет?";
// console.log("sdfsgfretg", prompt(question));
// console.log(question, prompt(question, 18));

// let output = prompt(question, 18);
// console.log("Оу, тебе уже:", output, "?")

let question = "Какова сторона куба?";
let userInput = prompt(question, 100);


function findArea(cubeSide) {
    return 6 * cubeSide * cubeSide;
}

let square = findArea(userInput);
console.log(square);