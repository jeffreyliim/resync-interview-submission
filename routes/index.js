var express = require('express');
var router = express.Router();
var {validateCredentials, validateAndCheckExisting, authenticate} = require('../middleware/auth');
var RegisterController = require("../controllers/registerController");
var LoginController = require('../controllers/loginController');
var CountryController = require('../controllers/countryController');

router.get('/', function (req, res, next) {
    return res.json({health_check: 'good'})
});

router.post('/register', validateAndCheckExisting, RegisterController.Register);
router.post('/login', validateCredentials, LoginController.Login);
router.post('/refreshToken', LoginController.RefreshToken);
router.post('/getAllCountryDetail', authenticate, CountryController.GetAllCountries);
router.post('/getCountryDetail', authenticate, CountryController.GetCountry);

module.exports = router;
