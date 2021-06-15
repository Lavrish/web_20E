// 10 кабинетов и коридор ; 5 *4; 100м в длину 3 метра в ширину; высота 3метра.

// 0. литр краски на 5 метров
// 1. Стоимость литра краски - 7€
// 2. Найти количество литров краски
// 3. площадь стен в коридоре
// 4. площадь коридор
// 5. площадь кабинета.

let heightFloor = 3;

function officeArea(sidea, sideb) {
    let area = (sidea + sideb + sideb) * heightFloor;
    return area;
}

function hallway(length, width) {
    return (length + width) * 2 * heightFloor;
}

let allArea = hallway(100, 3) + 10 * officeArea(5, 4);

// console.log(allArea);

function findColorLiter(area) {
    return area / 5;
}

function findColorCost(literColor) {
    return literColor * 7;
}

let money = findColorCost(
    findColorLiter(allArea)
);
console.log("Сумма за краску на покраску всей школы " + money + "€")