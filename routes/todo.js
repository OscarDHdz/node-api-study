const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

const checkAuth = require('./MiMiddelwardeDeAuth')

router.get('/todo', checkAuth, todoController.getTodos);
router.get('/todo/:id', checkAuth, todoController.getTodoById);
router.post('/todo', todoController.addTodo);
router.put('/todo/:id', todoController.updateTodo);
router.delete('/todo/:id', todoController.deleteTodo);


module.exports = router;
