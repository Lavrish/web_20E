const h1 = document.querySelector("h1");

// console.log(h1)
// console.log(h1.textContent)
// console.log(h1.innerText)
// console.log(h1.innerHTML)

// h1.innerText = "Hewwo Wowwd"
h1.innerHTML = "Hewwo <span class='red'>Wowwd</span>"

// select one <p>
// const p = document.querySelector('p')
// select all <p>s
const p = document.querySelectorAll('p')
// console.log(p)

for (const pElement of p) {
    // pElement.classList.add('red');
    pElement.classList.toggle('red');
}

const ex1 = document.querySelectorAll('.red')
// console.log(ex1)

const underline = document.querySelector('.underline')
underline.style.textDecoration = 'underline'

// console.log(typeof document.querySelectorAll('li'))

// --------------------------

const ul = document.querySelector('ul')

ul.classList.add('list1')

const li = document.querySelectorAll('li')

for (let i = 0; i < li.length; i += 2){
    li[i].classList.add('red')
}

for (let i = 1; i < li.length; i += 2){
    li[i].classList.add('green')
}

const JSCells = [
    {name: 'Satoshi', age:'88'},
    {name: 'Masha', age:'24'},
    {name: 'Petya', age:'35'},
    {name: 'Vasya', age:'27'}
]

const tr = document.querySelectorAll('tr')

for (const arrKey in JSCells){
    // console.log(tr[arrKey].children)
    tr[arrKey].children[0].innerText = JSCells[arrKey].name
    tr[arrKey].children[1].innerText = JSCells[arrKey].age
}

const td = document.querySelector('.name')

// console.log(td.parentNode)
// console.log(tr[0].childNodes)
console.log(ul.childNodes)

// console.log(document.querySelector('html').parentNode)
// console.log(document.querySelector('html').parentElement)
console.log(document.head.title)
document.head.title = "Hello"
console.log(document.head.title)

// const nameCells = document.querySelectorAll('.name')
// const ageCells = document.querySelectorAll('.age')
//
// function passData(){
//     for (const arrKey in JSCells) {
//         nameCells[arrKey].innerText = JSCells[arrKey].name
//         ageCells[arrKey].innerText = JSCells[arrKey].age
//     }
// }
//
// passData()

// for (const nameCellsKey in nameCells) {
//     nameCells[nameCellsKey].innerText = arr[nameCellsKey]['name']
// }
//
// for (const ageCellsKey in ageCells) {
//     ageCells[ageCellsKey].innerText = arr[ageCellsKey]['age']
// }