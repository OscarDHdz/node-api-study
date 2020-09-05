const todos = [
  { id: 1, description: 'Brush haru', done: false },
  { id: 2, description: 'Eat pizza', done: false }
];

module.exports.getTodos = (req, res) => {
  res.send(todos);
};

module.exports.getTodoById = (req, res) => {;
  const id = req.params.id;
  const todo = todos.find(item => `${item.id}` === `${id}`);

  if (!todo) {
    return res.status(404).send();
  }
  return res.send(todo);
};

module.exports.addTodo = (req, res) => {
  const {description} = req.body;
  const todo = {
    id: todos.length + 1,
    done: false,
    description
  };
  todos.push(todo);
  return res.status(201).send(todo);
};

module.exports.updateTodo = (req, res) => {;
  const id = req.params.id;
  const {description, done} = req.body;
  const todo = todos.find(item => `${item.id}` === `${id}`);

  if (!todo) {
    return res.status(404).send();
  }
  todo.description = description;
  todo.done = done;
  return res.send(todo);
};

module.exports.deleteTodo = (req, res) => {;
  const id = req.params.id;
  const todoIdx = todos.findIndex(item => `${item.id}` === `${id}`);
  if (todoIdx < 0) {
    return res.status(404).send();
  }

  todos.splice(todoIdx, 1);
  return res.status(200).send();
};
