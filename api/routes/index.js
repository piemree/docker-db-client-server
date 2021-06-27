const express = require("express");
const router = express.Router();
const Todo = require("../database/models/Todo");
/* GET home page. */
router.get("/", async function (req, res, next) {
  const todos =await Todo.find();
  res.send(todos);
});

module.exports = router;
