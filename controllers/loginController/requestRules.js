const {check, body} = require('express-validator');

exports.loginRequestRules = [
    body('email').notEmpty().isEmail().withMessage('is required of type email'),
    body('password').notEmpty().isString().withMessage('is required of type string'),
];

exports.refreshTokenRequestRules = [
    check('userId').notEmpty().isString().withMessage('is required of type string'),
    check('token').notEmpty().isString().withMessage('is required of type string'),
];
