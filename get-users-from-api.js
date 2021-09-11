const btn = document.querySelector('button');
const list = document.querySelector('ul');

const getUsers = async () => {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log( result );
        const json = await result.json();
        console.log(json);
        list.innerHTML = '';
        json.forEach( user => {
            const li = `<li>${user.name}</li>`;
            list.innerHTML += li;
        } )
    } catch (e) {
        console.log(e.message);
    }
}

btn.addEventListener('click',() => {
    getUsers();
})
//
// const ab = (b) => {return b*b}
// const ab1 = b => b*b
// const ab2 = (b,i) => b*i
// const ab3 = b => {console.log(b); return b*b;}

