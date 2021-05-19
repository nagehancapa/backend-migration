"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Matias",
          email: "matias@codaisseur.com",
          phone: "123456",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karla",
          email: "karla@codaisseur.com",
          phone: "123456",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria",
          email: "maria@codaisseur.com",
          phone: "123456",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
