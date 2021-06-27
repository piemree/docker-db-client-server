const router = require('express').Router()
const index = require("./routes/index");
const addTodo = require("./routes/addTodo");
const delTodo = require("./routes/delTodo");
const modifyTodo = require("./routes/modifyTodo");

router.use("/",index)
router.use("/add-todo",addTodo)
router.use("/del-todo",delTodo)
router.use("/modify-todo",modifyTodo)

module.exports=router