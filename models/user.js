var {UserToken} = require('./user_token');
var {DataTypes} = require('sequelize');
var sequelize = require('../database/sequelize');

var User = sequelize.getSequelize().define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    // Model attributes are defined here
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

User.hasOne(UserToken);
UserToken.belongsTo(User);

module.exports = {
    User,
};
