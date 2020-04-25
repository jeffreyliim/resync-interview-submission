var {DataTypes} = require('sequelize');
var sequelize = require('../database/sequelize');

var CountryDetail = sequelize.getSequelize().define('countryDetail', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gmtOffset: {
        // + GMT+8 etc
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = {
    CountryDetail
};
