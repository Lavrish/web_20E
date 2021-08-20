const h1 = document.querySelector('h1');

console.log( h1.innerText );
h1.innerHTML = 'Здесь <span class="red">был</span> Вася!';
const p = document.querySelectorAll('p');

for (const pElement of p) {
    console.log( pElement.textContent );
    // pElement.classList.add('red');
    pElement.classList.toggle('red');
}

const ex1 = document.querySelectorAll('.red');
console.log( ex1 );

// const ex2 = document.getElementById('title');
// const ex2 = document.getElementsByClassName('red');
// console.log( ex2 );

const underLine = document.querySelectorAll('.underline');
for (const uEle of underLine) {
    uEle.style.textDecoration = 'underline';
    uEle.style.fontStyle = 'italic';
}

console.log(document.querySelector('ul'));
console.log(document.querySelectorAll('li'));