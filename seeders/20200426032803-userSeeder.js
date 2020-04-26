'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
          email: 'jeffrey@lim.com',
          password: "LTQP7v5NWhbGyMqBrOtFIbid4EfZG5z8WbX3xGCEgZd8utwUoOWm2ra1xhH0jTSdxRqmiGlmMO1bAlJRxEfF5lcgavCWgkuiUsbo8NR/STa7K8fBjdCk2Yn4Ps7BOu2SYOcqvHK2ZaCLeArZYpSeFEJ9DbzvP5ymYCrvTw4j3Sg=",
          createdAt: new Date(),
          updatedAt: new Date()
      }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
