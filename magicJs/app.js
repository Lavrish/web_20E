function myFirstReadFunction() {
    let mySpan = document.getElementById("read-1");
    // let input = mySpan.innerHTML;
    // let input = mySpan.innerText;
    let input = mySpan.innerText;
    console.log(input, "input")
    writeData(input);
}

function writeData(input) {
    let output = document.getElementById("demo");
    output.innerText = input;
}

//
// function secondFunction(){
//     console.log("test")
// }

// myFirstReadFunction();