let square = (a) => {
    const area = a ** 2;
    const perimeter = a * 4;
    return `Площадь квадрата равна ${area}, периметр квадрата равен ${perimeter}`
}


let triangle = (a, b, c, r) => {

    const perimeter = a + b + c;
    const halfPer = perimeter / 2;
    const area = Math.sqrt(halfPer * (halfPer - a) * (halfPer - b) * (halfPer - c));
    // const area = perimeter * r


    return `Площадь треугольника равна ${area}, периметр треугольника равен ${perimeter}`
}


let cube = (a) => {
    const area = (a ** 2) * 6;
    const perimeter = a * 12;
    return `Площадь куба равна ${area}, периметр куба равен ${perimeter}`
}

let chess = (corn) => {
    return (corn ** 64) - 1
}

console.log(chess(2));
