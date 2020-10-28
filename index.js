const express = require("express");
const app = express();
const PORT = 4000;

const User = require("./models").user;
const TodoList = require("./models").todoList;

app.use(express.json());

function serverRunning() {
  console.log("server running on port 4000");
}

// Create a new user account and validate the e-mail field

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

// Fetch the correct user

app.get("/users/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).send("No user has been found with this ID");
    } else {
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

// Geting and updating the todoList model

app.get("/todolists", async (req, res, next) => {
  try {
    const todoList = await TodoList.findAll();
    res.json(todoList);
  } catch (e) {
    next(e);
  }
});

app.post("/todolists", async (req, res, next) => {
  try {
    const newTodoList = await TodoList.create(req.body);
    res.json(newTodoList);
  } catch (e) {
    next(e);
  }
});

app.put("/todolists/:listId", async (req, res, next) => {
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

app.listen(PORT, serverRunning);
