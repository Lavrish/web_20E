function squareAreaPerimeter(a) {
    return console.log("Square Perimeter: " + 2 * (a + a) + ", Area: " + a * a);
}

function rectangleAreaPerimeter(a, b) {
    return console.log("Rectangle Perimeter: " + 2 * (a + b) + ", Area: " + a * b);
}

function cubeAreaPerimeter(a) {
    return console.log("Cube Perimeter: " + 12 * a + ", Surface Area: " + 6 * (a ** 2));
}

squareAreaPerimeter(5);
rectangleAreaPerimeter(5, 7);
cubeAreaPerimeter(6);