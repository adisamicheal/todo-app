const express = require('express');

const router = express.Router();
const { getAllTodos, addTodo, getATodo, deleteTodo, updateTodo } = require('../controllers/todo');

// get all todo items in the db
router.get('/todo', getAllTodos)

// add a todo item
router.post('/todo/new', addTodo)

// get a todo item
router.get('/todo/:id', getATodo)

// delete a todo item
router.delete('/todo/:id', deleteTodo)

// update a todo item
router.put('/todo/:id', updateTodo)


module.exports = router;
