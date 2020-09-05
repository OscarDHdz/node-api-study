const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

router.get('/todo', todoController.getTodos);
router.get('/todo/:id', todoController.getTodoById);
router.post('/todo', todoController.addTodo);
router.put('/todo/:id', todoController.updateTodo);
router.delete('/todo/:id', todoController.deleteTodo);


module.exports = router;
