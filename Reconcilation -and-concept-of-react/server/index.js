const express = require('express');
const app  = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let todos = [];

app.get('/', (req, res) => {
    res.send("hello world");
})

app.post('/addnewtodo', (req, res) => {
    const {title} = req.body;
    if (!title) return res.status(404).send({message: "title is missing"}); 
    const newTodo = {
        id : Date.now().toString(),
        title
    }
    todos.push(newTodo);
    return res.status(200).send({todoId: newTodo.id, message: "todo created successfuly"});
})

app.get('/getAllTodo', (req, res) => {
    return res.send(todos);
})

app.listen(3000, () => {
    console.log(`server is running on port 3000`);
});