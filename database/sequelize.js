var Sequelize = require('sequelize');
var config = require('../config/config');

const mysql_conf = config.development;
mysql_conf['dialect'] = 'mysql';

class SequelizeDB {
    constructor() {
        this.sequelize = new Sequelize(mysql_conf.database, mysql_conf.username, mysql_conf.password, mysql_conf);
    }

    TestConnection() {
        return this.sequelize
            .authenticate()
            .then(function (err) {
                console.log('MySQL connection has been established successfully.');
            })
            .catch(function (err) {
                console.log('Unable to connect to the MySQL:', err);
            });
    }

    getSequelize() {
        return this.sequelize
    }
}

module.exports = new SequelizeDB();
