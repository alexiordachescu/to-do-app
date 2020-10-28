const express = require("express");
const app = express();
const PORT = 4000;
const userRouter = require("./routers/user");
const todoListRouter = require("./routers/todolist");

app.use(express.json());

app.use("/users", userRouter);

app.use("/todolists", todoListRouter);

app.listen(PORT, () => console.log(`up and running on ${PORT}`));
