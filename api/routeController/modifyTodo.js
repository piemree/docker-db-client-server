const Todo = require("../database/models/Todo");
const todos = require("./todos.json");

module.exports.modifyTodo = async function (req, res) {
 
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: req.body._id },
      { isFinish: req.body.isFinish },
      { new: true, returnOriginal: false }
    );


    return res.status(200).json(updatedTodo);
    /* const index = todos.findIndex((item) => item.id == req.body.id);
 
    if (index > -1) {

      todos[index] = { ...req.body };

      return res.status(200).json(todos[index]);
    }
    res.status(404).send("Not Found"); */
  } catch (error) {
    res.status(404).send("Not Found");
  }
};
