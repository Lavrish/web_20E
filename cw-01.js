function fibonacci(amount){
    let n1 = 0;
    let n2 = 1;
    let n3;
    console.log(n1)
    console.log(n2)
    for (let i = 3; i <= amount; i++) {
        n3 = n2 + n1;
        console.log(n3);
        n1 = n2;
        n2 = n3;
    }
}

fibonacci(10)