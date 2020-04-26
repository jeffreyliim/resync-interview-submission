const {check} = require('express-validator');

exports.countryRequestRules = [
    check('token').notEmpty().isString().withMessage('is required of type string'),
    check('name').notEmpty().isString().withMessage('is required of type string'),
];
