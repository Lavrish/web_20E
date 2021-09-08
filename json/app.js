// json - JavaScrip Object Notation

// [1,2,3,4,5] => "[1,2,3,4,5]"
// {fName: "Ivan", lName: "Ivanov"} => "{"fName": "Ivan", "lName": "Ivanov"}"

const numArrays = [ 1,2,3,4,5];

console.log( numArrays );
let numArraysJson = JSON.stringify( numArrays);
console.log( numArraysJson );
console.log( typeof numArraysJson );
console.log( JSON.parse(numArraysJson) );
console.log( typeof JSON.parse(numArraysJson) );

const person = {
    fName: 'Ivan',
    lName: 'Ivanov',
    age: 29,
    isWorking: true
}

let personJson = JSON.stringify( person );
console.log( personJson );
console.log( typeof personJson );
console.log(JSON.parse(personJson));
console.log(typeof JSON.parse(personJson));