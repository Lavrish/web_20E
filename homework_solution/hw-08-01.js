"use strict";

function circleArea(radius) {
    return Math.PI * radius * radius;
}

// console.log(circleArea(10));
// console.log(circleArea(5));

let squareFromCircleGreen = circleArea(100);
console.log("Площадь круга с радиусом 10 " + squareFromCircleGreen);
