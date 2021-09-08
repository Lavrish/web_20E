const field = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('ul');

const render = () => {
    list.innerHTML = ''
    names.forEach( name => {
        const li = `<li>${name}</li>`;
        list.innerHTML += li;
    } );
}

btn.addEventListener('click', () => {
    names.push( field.value );
    field.value = '';
    render();
    field.focus();
    const namesJson = JSON.stringify( names );
    localStorage.setItem('names', namesJson);
})

const names = JSON.parse( localStorage.getItem('names') ) ?? [];

// const lsNames = localStorage.getItem('names');
// const names = lsNames ? JSON.parse(lsNames) : [];

console.log( names );
render();