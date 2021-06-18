"use strict";

function space(speed, medicalPermisson) {
    const SUPERCONSTANT_G = 10;
    if (speed > SUPERCONSTANT_G && medicalPermisson) {
        console.log("Ракета улетает в космос");
        console.log("Выпускаем пресс-релиз об успешном запуске");
        console.log("Программисты представлены к государственным наградам");
    } else {
        console.log("Первоначального ускорения недостаточно")
        console.log("Подготовить аварийны службы")
    }
}

// space(15, false)

function space2(speed) {
    const SUPERCONSTANT_G = 10;
    if (speed < SUPERCONSTANT_G) {
        console.log("Первоначального ускорения недостаточно")
        console.log("Подготовить аварийны службы")
    } else {
        console.log("Ракета улетает в космос");
        console.log("Выпускаем пресс-релиз об успешном запуске");
        console.log("Программисты представлены к государственным наградам");
    }
}

space2(5);