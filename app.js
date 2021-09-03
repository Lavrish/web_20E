class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    happyBirthday() {
        this.age++;
    }

    sayHello() {
        console.log( `Hello, ${this.firstName}` );
    }

}

// const nikolay = {
//     firstName: 'Nikolay',
//     lastName: 'Ponomarev',
//     age: 25,
//     getFullName: function() {
//         return this.firstName + ' ' + this.lastName
//     }
// }


// const vasya = {firstName: 'Vasya', lastName: 'Vasiliyev', age: 30};
const vasya = new Person("Vasya", "Vasilyev", 30);
const pavel = new Person("Pavel", "Lavric", 21);
const inna = new Person("Inna", "Boiko", 18);

console.log( vasya.getFullName() );
console.log( pavel );
console.log( inna );

console.log( vasya );
vasya.happyBirthday();
console.log( vasya );
vasya.sayHello();


console.log( typeof Person);

function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

User.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName
}

User.prototype.sayHello = function() {
    console.log( `Hello, ${this.firstName}` )
}

const nikolay = new User("Nikolay", "Nikolayev", 25);
console.log( nikolay.getFullName() )
nikolay.sayHello();


// console.log( nikolay.getFullName() )


