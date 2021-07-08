"use strict";

someFunc()

function someFunc() {
    let count = 1;
    for (let z = 1; z <= 36; z++) {
        for (let y = 1; y <= z; y++) {
            for (let x = 1; x <= y; x++) {
                if (x * y * z === 36) {
                    console.log(count + `. x=${x}, y=${y}, z=${z}`);
                    count++;
                }
            }
        }
    }
}