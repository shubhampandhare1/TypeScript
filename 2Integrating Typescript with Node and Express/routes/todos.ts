import { Router } from 'express';

import { Todo } from '../models/todo'

let todos: Todo[] = [];

const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos })
})

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {     //set type to Todo to force TS to add correct data to this object
        id: new Date().toISOString(),
        text: req.body.text,
    }

    todos.push(newTodo);

    res.status(201).json({ todos: todos });
})

router.delete('/todo/:todoId', (req, res, next) => {
    const deleteId = req.params.todoId;

    todos = todos.filter((todo) => todo.id !== deleteId);

    res.status(200).json({ todos: todos })
})

router.put('/todo/:todoId', (req, res, next) => {
    const editId = req.params.todoId;

    const index = todos.findIndex((todo) => {
        return todo.id === editId;
    })

    if (index == -1) {
        return res.status(404).json({ message: 'todo not found' })
    }

    todos[index] = { id: todos[index].id, text: req.body.text }
    res.status(200).json({ message: 'Updated the todos' })

})

export default router;