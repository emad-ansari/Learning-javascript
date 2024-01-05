
let todos = [];

const fetchAllTodo = async() => {
    console.log('fetch all todo runs')
    try {
        const response = await fetch('http://localhost:3000/getAllTodo', {
            method: 'GET'
        })
        const data = await response.json();
        todos = data;
        InsertTodosIntoDom(todos, 0);
    }
    catch(error){
        console.log(error);
    }

}


fetchAllTodo();


let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', async() => {
    // make a fetch request and send the new todo item on server
    let todoTitle = document.getElementById('input').value;    
    try {

        const response = await fetch('http://localhost:3000/addnewtodo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: todoTitle
            })
        })
        // if response failed then just return

        if (response.status === 404) return;
         
        const data = await response.json();
        console.log(data.todoId);
        todos.push({id: data.todoId, title: todoTitle });
        console.log('this is  my todos : ', todos);            
        document.getElementById('input').value = "";
        createTodoElement(todos)
    }
    catch(error){
        console.log(error);
    }
    
})

const createTodoElement = (newTodo) => {
    // first of all grab all the existing todo item in the DOM
    let todoContainer = document.getElementById('todo-container');
    let allchildNode = todoContainer.children;
    let oldTodo = Array.from(allchildNode);
    let lengthDiff = newTodo.length - oldTodo.length;

    if (lengthDiff > 0){
        // means that there is extra todo added into dom
        let start = newTodo.length - lengthDiff;
        InsertTodosIntoDom(newTodo, start);           
    }
}

const InsertTodosIntoDom = (todoArray, start) => {
    for (let i = start; i < todoArray.length; i++){
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