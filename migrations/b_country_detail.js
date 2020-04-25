module.exports = {
    up: async function (queryInterface, Sequelize) {
        return new Promise(resolve => {
            queryInterface.createTable(
                'countryDetails',
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    name: Sequelize.STRING,
                    gmtOffset: Sequelize.STRING,
                    createdAt: {
                        type: Sequelize.DATE
                    },
                    updatedAt: {
                        type: Sequelize.DATE
                    },
                },
            );
            resolve()
        })
    },

    down: function (queryInterface, Sequelize) {
        // logic for reverting the changes
    }
};
