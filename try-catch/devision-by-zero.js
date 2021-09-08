const division = (a,b) => {
    if (b == 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}


try {
    console.log(division(100, 0));
} catch (e) {
    console.log(e.message);
}

console.log("hello world!");