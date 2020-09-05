const express = require('express');
const router = express.Router();

const todos = [
  { id: 1, description: 'Brush haru', done: false },
  { id: 2, description: 'Eat pizza', done: false }
]

router.get('/todo', (req, res) => {
  res.send(todos);
});

router.get('/todo/:id', (req, res) => {;
  const id = req.params.id;
  const todo = todos.find(item => `${item.id}` === `${id}`);

  if (!todo) {
    return res.status(404).send();
  }
  return res.send(todo);
});

router.post('/todo', (req, res) => {
  const {description} = req.body;
  const todo = {
    id: todos.length + 1,
    done: false,
    description
  };
  todos.push(todo);
  return res.status(201).send(todo);
});

router.put('/todo/:id', (req, res) => {;
  const id = req.params.id;
  const {description, done} = req.body;
  const todo = todos.find(item => `${item.id}` === `${id}`);

  if (!todo) {
    return res.status(404).send();
  }
  todo.description = description;
  todo.done = done;
  return res.send(todo);
});

router.delete('/todo/:id', (req, res) => {;
  const id = req.params.id;
  const todoIdx = todos.findIndex(item => `${item.id}` === `${id}`);
  if (todoIdx < 0) {
    return res.status(404).send();
  }

  todos.splice(todoIdx, 1);
  return res.status(200).send();
});






module.exports = router;
