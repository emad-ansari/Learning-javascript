let todos = [];
console.log(todos);
let todoId = 1;
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    let todoTitle = document.getElementById('input').value;
    todos.push({id: todoId, title: todoTitle });
    todoId++;
    createTodoElement(todos);
    document.getElementById('input').value = "";
})

const createTodoElement = (todoArray) => {
    document.getElementById('todo-container').innerHTML = "";
    for (let i = 0; i < todoArray.length; i++){
        let parentElement = document.getElementById('todo-container');
        let todoElement = document.createElement('div');
        let todoTitle = document.createElement('span');
        let deleteBtnElement = document.createElement('button');

        deleteBtnElement.innerText = 'Delete';
        todoElement.setAttribute('id', `${todoArray[i].id}` )
        deleteBtnElement.setAttribute('onclick', 'deleteTodo(' + todoArray[i].id + ')')
        todoTitle.innerText = todoArray[i].title;
        // append the todoTitle and deleteBtn into todoElement
        todoElement.append(todoTitle, deleteBtnElement);
        parentElement.appendChild(todoElement);
    }
}


// now write a  logic for delelte todo item

const deleteTodo = (todoId) => {
    let remianingTodo = todos.filter(todo => todo.id !== todoId);
    todos = remianingTodo;
    let childTodo = document.getElementById(todoId);
    let parentElement = document.getElementById('todo-container');
    parentElement.removeChild(childTodo);
}