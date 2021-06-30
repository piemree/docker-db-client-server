const Todo = require("../database/models/Todo");
module.exports.addTodo = async function (req, res, next) {
   const newTodo = Todo.create(req.body);
  res.status(201).json(newTodo);
};
