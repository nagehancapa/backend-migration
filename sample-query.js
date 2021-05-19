const { Op } = require("sequelize");

// // Select all rows where firstName === 'Matias', but only return the first one.
// // Resolves with an object or undefined (if no matching rows exist)
// const specificUser = await User.findOne({ where: { name: "Matias" } });

// // Select a row by its primary key. Resolves with an object or undefined (if no matching rows exist)
// const userByPk = await User.findByPk(3);

// // A query using a numeric operator
// const tallUsers = await User.findAll({
//   // WHERE height >= 175
//   where: {
//     height: {
//       [Op.gte]: 175, // gte stans for 'greater than or equal'
//     },
//   },
// });

const User = require("./models").user;

async function getAllUsers() {
  try {
    const allUsers = await User.findAll();
    return allUsers.map((user) => user.toJSON());
  } catch (e) {
    console.log(e.message);
  }
}

// getAllUsers().then((users) => console.log(users));

const createNewUser = async () => {
  try {
    const newGuy = await User.create({
      name: "Nagehan",
      email: "nagehan@nage.com",
      phone: "123456",
      password: "123",
    });
    console.log(newGuy);
  } catch (e) {
    console.log(e.message);
  }
};

createNewUser();

const deleteUserById = async (id) => {
  try {
    const toDelete = await User.findByPk(id);
    console.log(toDelete);
    await toDelete.destroy();
    console.log("user deleted", id);
  } catch (e) {
    console.log(e.message);
  }
};

// deleteUserById(4);
