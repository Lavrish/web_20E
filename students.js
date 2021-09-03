class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class Student extends Person{

    constructor(firstName, lastName, age, course) {
        super(firstName, lastName, age);
        this.course = course;
    }
}

class Lektor extends Person {
    constructor(firstName, lastName, age, schoolName) {
        super(firstName, lastName, age);
        this.school = schoolName;
    }
}

const lektor = new Lektor("Ignaty", "Kashgnitsky", 49, "Tel-Ran.de")

const students = [
    new Student("Inna", "Boiko", 18, 'FullStack'),
    new Student("Pavel", "Lavric", 21, 'FullStack'),
    new Student("Nikolay", "Ponomarev", 25, 'FullStack')
];


const container = document.querySelector('#students');
const info = document.querySelector('#group-info');

info.innerHTML = `
 <p>Lektor: ${lektor.getFullName()}, from ${lektor.school}</p>
 `;

students.forEach( student => {
    const template = `
    <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${student.getFullName()}</h5>
            <small>${student.age} years old</small>
        </div>
        <p class="mb-1">In curse: ${student.course}</p>
    </div>
    `;
    container.innerHTML += template;
} )