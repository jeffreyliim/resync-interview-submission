var {DataTypes} = require('sequelize');
var sequelize = require('../database/sequelize');

const UserToken = sequelize.getSequelize().define('UserToken', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
    },
    expiresIn: {
        type: DataTypes.DATE,
    },
    refreshCount: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: true
});

module.exports = {
    UserToken,
};
