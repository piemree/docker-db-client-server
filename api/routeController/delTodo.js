const Todo = require("../database/models/Todo");
const todos = require("./todos.json");

module.exports.delTodo = async function (req, res, next) {
  try {
    // await Todo.findByIdAndDelete(req.body.id);
    const index = todos.findIndex((item) => item.id == req.params.id);

    if (index > -1) {
      const deletedTodo = todos.splice(index, 1);

      return res.status(200).json({id:deletedTodo[0].id});
    }
    res.status(404).send("Not Found");
  } catch (error) {
    res.status(404).send("Not Found");
  }
};
