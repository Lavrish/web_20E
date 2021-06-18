'use strict';

function helpPoliceman(speed) {
    // speed = proveSpeed(speed);
    let result = '';
    if (speed < 50) {
        result = 'Нарушений нет'
    } else if (speed <= 65) {
        result = 'Устное порицание и лекция на 5 минут'
    } else if (speed <= 100) {
        result = 'Штраф 40 евро'
    } else if (speed <= 130) {
        result = 'Fine 500 euros'
    } else {
        result = "Driver's license revoked for three years, vehicle confiscation, 1000 euros fine"
    }
    return result;
}

console.log(helpPoliceman(10))
console.log(helpPoliceman(60))
console.log(helpPoliceman(70))
console.log(helpPoliceman(110))
console.log(helpPoliceman(150))