const list = document.querySelector('#users-list');
const infoBlock = document.querySelector('#userInfo');
const todoBlock = document.querySelector('#todoList');
const infoChoose = document.querySelector('#infoChoose');
const right = document.querySelector('#right');
let userInfo = null;
let todos = [];

const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            alert("Warning!!!");
            return;
        }
        const data = await response.json();
        list.innerHTML = data.map(user => `<li onclick="chooseUser(${user.id})" class="list-group-item user-choose" id="user_${user.id}">${user.name}</li>`).join('');
        // list.addEventListener('click', event => {
        //
        // })
    } catch (e) {
        console.log(e.message);
    }
}

const chooseUser = userId => {
    parseUser(userId);
    parseTodos(userId);
}

const parseUser = async userId => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        userInfo = {...data};
        renderUserInfo();
    } catch (e) {
        console.log(e.message)
    }


}

const parseTodos = async userId => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        const data = await response.json();
        todos = [...data];
        renderTodos();
    } catch (e) {
        console.log(e.message);
    }
}

const renderTodos = () => {
    todoBlock.innerHTML = "<ul class='list-group'>" + todos.map(todo => `<li class="list-group-item">${todo.title}</li>`).join('') + "</ul>";
}

const renderUserInfo = () => {
    infoBlock.innerHTML = `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${userInfo.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${userInfo.email}</h6>
            <p class="card-text">${userInfo.address.suite}, ${userInfo.address.street}, ${userInfo.address.zipcode} ${userInfo.address.city},</p>
            <p class="card-text">Phone: ${userInfo.phone}</p>
          </div>
    </div>`;
}

infoChoose.addEventListener( 'click', event => {
    event.preventDefault();
    infoChoose.querySelectorAll('a').forEach(a => a.classList.remove('active'));
    event.target.classList.add('active');
    const id = event.target.getAttribute('data-id');
    document.querySelectorAll('#right > div').forEach(d => d.classList.add('hidden'))
    document.querySelector("#"+id).classList.remove('hidden');
} )

document.addEventListener('DOMContentLoaded', () => {
    getUsers();
})

/*
1. Добавить вкладку с постами каждого пользователя
2. Все задачи в списке ToDoList должны иметь цветовое оформление для завершенных (оформление найти на getbootstrap.com)
3. Активного пользователя выделить цветом
 */