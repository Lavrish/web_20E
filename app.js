const title = document.querySelector('h1');
const btn = document.querySelector('#btnChangeColor');
const clock = document.querySelector('.clock');
const timeLog = document.querySelector('.timeLog');

let timeClock = 1;

// 3 sec

const btnClick = () => {
    title.classList.toggle('red');
    title.classList.toggle('bigFont');
}

btn.addEventListener('click', event => {
    event.preventDefault();
    setTimeout(() => {
        btnClick();
    }, 3000);
})

setInterval(() => {
    timeClock++;
    clock.textContent = timeClock.toString();

    if ( timeClock % 10 === 0 ) {
        const li = document.createElement('li');
        li.textContent = "прошла минута ;-)";
        timeLog.appendChild(li);
        btnClick();
    }

}, 1000)