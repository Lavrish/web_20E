"use strict";

let fname = "сергей";
let sname = "рыжиков";
let user = fname.concat(" ", sname);
user = fname + sname;
console.log(user)

//trim()

let smartUser = "               Сер           ёга      ";
console.log(smartUser);
smartUser = smartUser.trim();
console.log(smartUser);

// toLowerCase, toUpperCase()

let text = "я памятник воздвиг себе нерукотворный";
let newText = text.toUpperCase();
console.log(text)
console.log(newText)
let text2 = "ALKHKUFUZLIUZHÖIUÄP=*'ÜPJKKLHKJGZTUZU";
let newText2 = text2.toLowerCase();
console.log(newText2);

let output = newText2.substring(0, 1).toUpperCase() + newText2.substring(1).toLowerCase();
console.log(output)
