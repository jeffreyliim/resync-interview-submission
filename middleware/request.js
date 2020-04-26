var {validationResult} = require('express-validator');
exports.requestValidator = function (req, res, next) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        errors = errors.array().filter(obj => {
            return obj.msg !== 'Invalid value'
        });
        return res.status(422).json({errors: errors});
    }
    next()
};
