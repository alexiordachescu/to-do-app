const User = require("./models").user;
const TodoItem = require("./models").todoItem;

async function getUsers() {
  const allUsers = await User.findAll();
  return allUsers.map((user) => user.get({ plain: true }));
}

getUsers().then((users) => console.log(users));

async function newUser({ name, email, phone }) {
  const newUser = await User.create({ name, email, phone });
  return newUser.get({ plain: true });
}

newUser({
  name: "rein",
  email: "rein@codaisseur.com",
  phone: 4232,
}).then((result) => console.log(result));

async function importantTodos() {
  const todos = await TodoItem.findAll({ where: { important: true } });
  return todos.map((todo) => todo.get({ plain: true }));
}

importantTodos().then((result) => console.log(result));
