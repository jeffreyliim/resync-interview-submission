const {check, validationResult} = require('express-validator');

exports.countryRequestRules = [
    check('token').isLength({min: 1000})
];
exports.countryRequestValidator = function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
    next()
};
