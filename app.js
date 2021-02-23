const form = document.querySelector('.newTodoForm');
const todoInput = document.querySelector('#newTodo');
const todoText = document.querySelectorAll('.todoText')
const todoList = document.querySelector('.todoList')
const completedBox = document.querySelectorAll('.completedBox');

//empty array to store the todos
let todos = [];

//creates a new todo
const createNewElement = (id) => {
    let newItem = document.createElement('li');
    newItem = `<li class="soloTodo"><i class='bx bx-check completedBox' id="${id}"></i><p class="todoText">${todoInput.value.trim()}</p><i class='bx bx-x removeBox'></i></li>`
    todoList.insertAdjacentHTML('afterbegin', newItem); 
};

//adds new todo to task list
form.addEventListener('submit', (e) => {
    e.preventDefault()
    //validates form input
    if(todoInput.value === ""){
        alert("The form can't be empty!")
        return false;
    }
    //creates newto object
    const newTodo = {
        checked: false,
        text: todoInput.value.trim(),
        id: Date.now()
    }
    todos.push(newTodo);
    createNewElement(newTodo.id);
    todoInput.value = ''; 
}) 

//checkbox listener
todoList.addEventListener('click', (e) => {
    //marks todo as Done.
    if(e.target.classList.contains('removeBox')){
        e.target.parentNode.remove();

        for(let i = 0; i < todos.length; i++){
            if(todos[i].id == e.target.parentElement.children[0].id){
                todos.splice(i, 1);
            }
        }
    }
    //removes todo
    if(e.target.classList.contains('completedBox')){
        e.target.nextElementSibling.classList.toggle('completedItem')

        for(let i = 0; i < todos.length; i++){
            if(todos[i].id == e.target.id){
                todos[i].checked = !todos[i].checked;
            }
        }
    }
});