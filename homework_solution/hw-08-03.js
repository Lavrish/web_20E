"use strict";
// Написать формулу вычисления стоимости Евро,
// если курс Евро к Доллару 1,1.

function currencyConverterEuroToDollar(euro) {
    //    для доллара было бы так dollar/1.1
    console.log("тест1");
    return euro * 1.1;
}

let euro500 = currencyConverterEuroToDollar(500);
console.log(euro500)