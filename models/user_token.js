var {DataTypes} = require('sequelize');
var sequelize = require('../database/sequelize');

var UserToken = sequelize.getSequelize().define('userToken', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
    },
    token: {
        type: DataTypes.STRING
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
