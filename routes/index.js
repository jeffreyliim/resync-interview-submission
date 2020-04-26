var express = require('express');
var router = express.Router();
var {authenticate} = require('../middleware/auth');
var {countryRequestRules, allCountryRequestRules} = require('../controllers/countryController/requestRules');
var {refreshTokenRequestRules, loginRequestRules} = require('../controllers/loginController/requestRules');
var {registerRules} = require('../controllers/registerController/requestRules');
var {requestValidator} = require('../middleware/request');
var RegisterController = require("../controllers/registerController");
var LoginController = require('../controllers/loginController');
var CountryController = require('../controllers/countryController');

router.get('/', function (req, res, next) {
    return res.json({health_check: 'good'})
});

router.post('/register', registerRules, requestValidator, RegisterController.Register);
router.post('/login', loginRequestRules, requestValidator, LoginController.Login);
router.post('/refreshToken', refreshTokenRequestRules, requestValidator, LoginController.RefreshToken);
router.post('/getCountryDetail', countryRequestRules, requestValidator, authenticate, CountryController.GetCountry);
router.post('/getAllCountryDetail', allCountryRequestRules, requestValidator, authenticate, CountryController.GetAllCountries);

module.exports = router;
