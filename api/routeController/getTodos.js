const Todo = require("../database/models/Todo");
//const todos=require("./todos.json")
module.exports.getTodos = async function (req, res, next) {
  const todos =await Todo.find();
  res.send(todos);
}
