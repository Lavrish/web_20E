function findFactorial(integer) {
    let output = 1;
    for (let i = 1; i <= integer; i++) {
        output = output * i;
    }
    return output;
}

function findFactorialRecursively(integer) {
    if (integer > 1) {
        return integer * findFactorialRecursively(integer - 1);
    } else {
        return 1;
    }
}

function findFactorialRecursivelyAlt(integer) {
    if (integer === 1) {
        return 1;
    } else {
        return integer * findFactorialRecursively(integer - 1);
    }
}

console.log(findFactorialRecursively(6))