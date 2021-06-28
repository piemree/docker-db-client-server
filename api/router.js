const router = require('express').Router()
const {getTodos} = require("./routeController/getTodos");
const {addTodo} = require("./routeController/addTodo");
const {modifyTodo} = require("./routeController/modifyTodo");
const {delTodo} = require("./routeController/delTodo");

router.get("/",getTodos)
router.post("/add-todo",addTodo)
router.put("/modify-todo",modifyTodo)
router.delete("/del-todo/:id",delTodo)

module.exports=router