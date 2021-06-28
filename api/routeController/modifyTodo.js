const Todo = require("../database/models/Todo");
const todos = require("./todos.json");

module.exports.modifyTodo = async function (req, res) {
  try {
    // await Todo.findByIdAndDelete(req.body.id);

    const index = todos.findIndex((item) => item.id == req.body.id);
 
    if (index > -1) {

      todos[index] = { ...req.body };

      return res.status(200).json(todos[index]);
    }
    res.status(404).send("Not Found");
  } catch (error) {
    res.status(404).send("Not Found");
  }
};
