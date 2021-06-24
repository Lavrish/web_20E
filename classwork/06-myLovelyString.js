"use strict";

// 01 helloName
// console.log(helloName("bob"));

function helloName(stringName) {
    return "Hello " + stringName + "!";
}

function makeAbba(a, b) {
    return a + b + b + a;
}

// console.log(makeAbba('Yo', 'Alice'));

console.log(makeTags('i', 'Yay'));
console.log(makeTags('i', 'Hello'));
console.log(makeTags('cite', 'Yay'));

function makeTags(tag, word) {
    let startTag = "<" + tag + ">";
    let endTag = "</" + tag + ">";
    return startTag + word + endTag;
}
