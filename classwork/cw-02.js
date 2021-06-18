"use strict";

function makeHotDrink(water = 100, cacao = 10, coffee = 10, milk = 50, sugar = 10) {
    return (`Подогреваем ${water}миллилитров воды,
        кроме того ${cacao}миллиграмм какао,
        добавляем ${coffee}миллиграмм свежесмолотого кофе,
        для этого напитка использовано ${milk}миллилитров молока,
        и ${sugar}миллиграмм сахара
    `);
}

/*
water - 100ml (для чая или просто)
latte: milk -40, coffee-30, water-70
cappuccino - milk(30), coffee(20), water(100)
espresso - milk(0), coffee(20), water(50)
americano - milk(0), coffee(20), water(100)
lungo - milk(20), coffee(20), water(100)
cacao = milk(100), caco(20), sugar(10)
 */

// console.log(makeHotDrink(100, 0, 0, 0, 0))

let hotWater = makeHotDrink(100, 0, 0, 0, 0);
let latte = makeHotDrink(70, 0, 30, 30, 0);
let cacao = makeHotDrink(0, 20, 0, 100, 10);

// console.log(cacao)

console.log(makeHotDrink())
