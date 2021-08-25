const field = document.querySelector('#todo');
const btn = document.querySelector('#addTodo');
const list = document.querySelector('#app');

const todoList = []; // {id: 1, title: 'Learn JS', isCompleted: false}
let lastId = 0;

// class for isCompleted: true -> text-decoration-line-through

const renderTodo = () => {
    list.innerHTML = '';
    todoList.forEach((todo) => {
        const par = document.createElement('p');
        par.textContent = todo.title;
        const elementList = document.createElement('li');
        elementList.appendChild(par);
        list.appendChild(elementList);
    })
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const newText = field.value.trim();
    if (newText === '') return;
    const newItem = {
        id: ++lastId,
        title: newText,
        isCompleted: false
    };
    todoList.push(newItem);
    renderTodo();
    field.value = '';
    console.log( todoList )
});
