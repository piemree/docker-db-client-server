const Todo = require("../database/models/Todo");
const todos = require("./todos.json");
const { uuid } = require("uuidv4");
module.exports.addTodo = async function (req, res, next) {
  // const newTodo = new Todo(req.body);
  // await newTodo.save();
  const newTodo = { id: uuid(), ...req.body };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};
