var express = require('express');
var router = express.Router();
var {User} = require('../models/user');

router.get('/', function (req, res, next) {
    var request = {
        email: 'jeffrey',
        password: 'asd'
    };
    User.create(request);
    res.json()
});

router.post('/register', function (req, res, next) {
//username and pw
});

router.post('/login', function (req, res, next) {
//username and pw access token up to 5 mins
});

router.post('/getAllCountryDetail', function (req, res, next) {
    /**
     * {
     *     token:
     *     countries:[]
     * }
     *
     * */

});

router.post('/getCountryDetail', function (req, res, next) {
    /** req: name
     * {
     *     token:
     *     country:{}
     * }
     *
     * */
});

router.post('/refreshToken', function (req, res, next) {
//username and pw access token up to 5 mins
});

module.exports = router;
