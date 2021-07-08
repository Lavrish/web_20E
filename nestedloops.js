"use strict";
// интерпритируемый или компилируемый язык

// rectangleTwo(5, 7);

function rectangleOne(height, width) {
    let line = "";
    for (let i = 0; i < width; i++) {
        line += "*";
    }
    for (let i = 0; i < height; i++) {
        console.log(line)
    }
}

function rectangleTwo(height, width) {
    for (let i = 0; i < height; i++) {
        let line = "";
        for (let j = 0; j < width; j++) {
            line += "*";
        }
        console.log(line);
    }
}

// for each // for in // for of
// i, j, k , n, t,
// char -c , string - s, integer - i.
rectangleThree(5, 7, "*")

function writeLine(width, char) {
    let line = ""
    for (let i = 0; i < width; i++) {
        line += char;
    }
    console.log(line);
}

function rectangleThree(height, width, char) {
    for (let i = 0; i < height; i++) {
        writeLine(width, char);
    }
}
