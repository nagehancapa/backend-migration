const User = require("./models").user;
const TodoItem = require("./models").todoItem;

async function getAllUsers() {
  try {
    const allUsers = await User.findAll();
    return allUsers.map((user) => user.toJSON());
  } catch (e) {
    console.log(e.message);
  }
}

// getAllUsers().then((users) => console.log(users));

async function getAllTodoItems() {
  try {
    const allItems = await TodoItem.findAll();
    return allItems.map((item) => item.toJSON());
  } catch (e) {
    console.log(e.message);
  }
}

// getAllTodoItems().then((items) => console.log(items));

async function getUserByPk(key) {
  try {
    const userByPk = await User.findByPk(key);
    return userByPk ? userByPk.toJSON() : "Not found!";
  } catch (e) {
    console.log(e.message);
  }
}

// getUserByPk(2).then((user) => console.log(user));

// const createNewUser = async ({ name, email, phone, password }) => {
//   try {
//     const newGuy = await User.create({
//       name,
//       email,
//       phone,
//       password,
//     });
//     console.log(newGuy.get({ plain: true }));
//   } catch (e) {
//     console.log(e);
//   }
// };

// createNewUser({
//   name: "Nagehan",
//   email: "nagehan@nage.com",
//   phone: "1234567",
//   password: "456",
// });

const deleteUserById = async (id) => {
  try {
    const toDelete = await User.findByPk(id);
    console.log(toDelete.get({ plain: true }));
    await toDelete.destroy();
    console.log("user deleted", id);
  } catch (e) {
    console.log(e.message);
  }
};

deleteUserById(4);

async function getImportantTodoItems() {
  const todos = await TodoItem.findAll({ where: { important: true } });
  return todos.map((todo) => todo.get({ plain: true }));
}

// getImportantTodoItems().then((result) => console.log(result));
