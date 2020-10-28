const { Router } = require("express");
const TodoList = require("../models").todoList;
const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const newTodoList = await TodoList.create(req.body);
    res.json(newTodoList);
  } catch (e) {
    next(e);
  }
});

router.put("/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const updatedList = await TodoList.findByPk(listId);
    if (!updatedList) {
      res.status(404).send("Not found");
    } else {
      const sendBack = await updatedList.update(req.body);
      res.json(sendBack);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
