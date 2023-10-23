"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ todos: todos });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const deleteId = params.todoId;
    todos = todos.filter((todo) => todo.id !== deleteId);
    res.status(200).json({ todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const editId = params.todoId;
    const index = todos.findIndex((todo) => {
        return todo.id === editId;
    });
    if (index == -1) {
        return res.status(404).json({ message: 'todo not found' });
    }
    todos[index] = { id: todos[index].id, text: req.body.text };
    res.status(200).json({ message: 'Updated the todos' });
});
exports.default = router;
