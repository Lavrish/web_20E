const error = document.querySelector('.error');
const hello = document.querySelector('.hello');
const form = document.querySelector('.form');
const btn = document.querySelector('#sayHello');
const firstName = document.querySelector('#firstName');

firstName.focus();

btn.addEventListener('click', (event) => {
    event.preventDefault();

    if ( firstName.value.trim() === '' ) {

        error.classList.remove('hidden');
        setTimeout(() =>{
            error.classList.add('hidden');
            firstName.value = '';
            firstName.focus();
        }, 3000);
        return;
    }

    hello.querySelector('span').textContent = firstName.value.trim();
    hello.classList.remove('hidden');
    form.classList.add('hidden');
    setTimeout(() =>{
        hello.classList.add('hidden');
        form.classList.remove('hidden');
        hello.querySelector('span').textContent = '';
            firstName.value = '';
        firstName.focus();
    }, 3000);

})