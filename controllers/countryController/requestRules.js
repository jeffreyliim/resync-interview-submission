const {check} = require('express-validator');
exports.countryRequestRules = [
    check('name').notEmpty().isString().withMessage('is required of type string'),
    check('token').notEmpty().isString().withMessage('is required of type string'),
];
exports.allCountryRequestRules = [
    check('token').notEmpty().isString().withMessage('is required of type string'),
];
