// const getVasya = () => {
//     return 'Vasya';
// }
//
// const getPetya = () => {
//     return 'Petya';
// }
//
// const sayHello = (callback) => {
//     console.log(`Hello ${ callback() }`);
// }
//
// sayHello( getPetya );
// sayHello( getVasya );
// sayHello( () => {
//     return 'Inna';
// } )

const persons = [
    {name: 'Vasya', age: 10},
    {name: 'Petya', age: 5},
    {name: 'Inna', age: 18},
];

// for (let i = 0; i < persons.length; i++) {
//     console.log( persons[i].name )
// }

/*
forEach
filter
map
reduce
findIndex
sort
 */

// persons.forEach( (element) => {
//     console.log( `element.name = ${ element.name }` );
// } )

console.log([3,2,16,6,2,9,1,0,15].sort( (a,b) => a - b ));

console.log( persons.sort( (a,b) => a.age - b.age ) );

console.log( [3,2,16,6,2,9,1,0,15].filter( element => element % 2 === 0 ) );

console.log( persons.filter( person => person.age % 5 === 0 ) );