'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('countryDetails', [{
            name: 'Singapore',
            gmtOffset: "GMT + 8",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Malaysia',
            gmtOffset: "GMT + 8",
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
