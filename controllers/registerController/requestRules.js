var {check, body} = require('express-validator');
var {User} = require('../../models/user');
exports.registerRules = [
    check('email').notEmpty().isEmail().withMessage('is required of type email'),
    body('password').custom((val, {req}) => {
        if (typeof  req.body.password === 'string') {
            var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;
            return req.body.password.match(regex)
        }
    }).withMessage('Minimum eight characters, at least one letter, one number and one special character'),

    body('email').custom(async (val, {req}) => {
        var user = await User.findOne({where: {email: req.body.email}});
        if (user) {
            return Promise.reject('email already in use');
        }
        return true;
    })
];
