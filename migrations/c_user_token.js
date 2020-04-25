module.exports = {
    up: async function (queryInterface, Sequelize) {
        return new Promise(resolve => {
            queryInterface.createTable(
                'userTokens',
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    userId: {
                        type: Sequelize.INTEGER,
                        references: {
                            model: 'users',
                            key: 'id'
                        },
                        onUpdate: 'cascade',
                        onDelete: 'cascade',
                    },
                    token: Sequelize.STRING,
                    expiresIn: Sequelize.DATE,
                    refreshCount: Sequelize.INTEGER,
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
