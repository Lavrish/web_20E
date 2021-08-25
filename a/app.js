const app = document.querySelector('#app');

console.log( app );

const hello = document.createElement('h1');

hello.textContent = 'Hello, Friends!';
hello.classList.add("red");

hello.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle("red");
})

document.querySelector('h2').addEventListener('click', (event) => {

    console.log(event.target);
    console.log(event.currentTarget);

})


// document.querySelectorAll('li').forEach( element => {
//     element.addEventListener('click', (event) => {
//         console.log( event.currentTarget )
//     })
// })

document.querySelector('ul').addEventListener('click', (event) => {
    console.log( event.target );
    console.log( event.currentTarget );
})


app.appendChild(hello);

console.log( hello )