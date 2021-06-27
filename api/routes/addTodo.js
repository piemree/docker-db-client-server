const express = require("express");
const router = express.Router();
const Todo = require("../database/models/Todo");
/* GET users listing. */
router.post("/", async function (req, res, next) {
  console.log(req.body);
  const newTodo = new Todo(req.body);
  newTodo.save();
  res.status(201).send("new todo added");
});

module.exports = router;
