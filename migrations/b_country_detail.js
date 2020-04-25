module.exports = {
    up: async function (queryInterface, Sequelize) {
        return new Promise(resolve => {
            queryInterface.createTable(
                'CountryDetails',
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    name: Sequelize.STRING,
                    gmtOffset: Sequelize.INTEGER,
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
