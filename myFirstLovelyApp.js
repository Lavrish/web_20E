function findBMI(userWeight, userHeight) {
    let user_BMI = userWeight / userHeight ** 2;
    return user_BMI;
}
// return userWeight / userHeight ** 2;

console.log("Принятое значение функции с бми"
    + findBMI(95, 1.65));


function anotherFunction(){
    console.log("Точное московское время");
}
anotherFunction();