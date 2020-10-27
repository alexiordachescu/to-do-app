"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert(
        "todoLists",
        [
          {
            name: "Play football",
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Learn coding",
            userId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
