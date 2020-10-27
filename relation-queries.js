const { user, todoItem, todoList, tag } = require("./models");

async function listsWithUsers() {
  const lists = await todoList.findAll({
    include: [user],
  });

  return lists.map((list) => list.get({ plain: true }));
}

// listsWithUsers().then((lists) => console.log(lists));

// ------- Get one user by id with his lists -------

async function getUser(id) {
  const result = await user.findByPk(id, { include: [todoList] });
  return result.get({ plain: true });
}
// getUser(2).then((result) => console.log(result));

// ------- Get one user by id with his lists, which also contain their belonging TodoItem's task attribute -------

async function getFullInfoUser(id) {
  const results = await user.findByPk(id, {
    include: [
      {
        model: todoList,

        include: { model: todoItem, attributes: ["task"] },
      },
    ],
  });

  return results.get({ plain: true });
}
// getFullInfoUser(2).then((result) => console.log(result.todoLists));

//------- Get all to do items with their corresponding tags -------

async function getItems() {
  const items = await todoItem.findAll({ include: [tag] });

  return items.map((item) => {
    return item.get({ plain: true });
  });
}

getItems().then((items) => console.log(items[0]));
