"use strict";

//“EUR”,”RUR”,”USD”,”GPB”
function currencyNameOfExchange(currencyName) {
    // курс к доллару
    let resultRate = 0;
    switch (currencyName) {
        case "EUR":
            resultRate = 1.1;
            break;
        case "RUR":
            resultRate = 0.014;
            break;
        case "GPB":
            resultRate = 1.39;
            break;
        case "USD":
            resultRate = 1.0;
            break;
        default:
            resultRate = 0.0;
            break;
    }
    return resultRate;
}

function onePaarCurrency(firstCurrency, secondCurrency) {
    return currencyNameOfExchange(firstCurrency) /
        currencyNameOfExchange(secondCurrency);
}

function currencyConverterFunction(firstValute, secondValute, money) {
    return onePaarCurrency(firstValute, secondValute) * money;
}

console.log(currencyConverterFunction("EUR", "RUR", 1000))