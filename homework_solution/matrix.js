"use strict";


function matrix(pill) {

    switch (pill) {
        case "red":
            console.log("выйти из матрицы")
            break;
        case "blue":
            //Каой то код
            console.log("Синяя таблетка позволит остаться в искусственно созданной реальности Матриц")
            break;
        default:
            console.log("Цвет таблетки не распознан")
    }
}

matrix("red");