var {User} = require('../models/user');
var {errorResponse, successResponse} = require('../utils/response');
var {verifyJwt} = require('../utils/hashing');
var {UserToken} = require('../models/user_token');

module.exports = {
    validateCredentials: async function (req, res, next) {
        var {email, password} = req.body;

        return next()
    },

    validateAndCheckExisting: async function (req, res, next) {
        var {email, password} = req.body;
        if (!email || !validateEmail(email)) {
            return res.json(errorResponse('not valid email'))
        }
        if (!password || password.length < 8) {
            return res.json(errorResponse('try a better password'))
        }
        var user = await User.findOne({where: {email}});
        if (user) {
            return res.json(errorResponse('email already in use'));
        }
        return next()
    },

    authenticate: async function (req, res, next) {
        var {token} = req.body;
        var verified_token = await verifyJwt(token);
        // if token isnt a valid token
        if (typeof verified_token === 'number') {
            var errorCode = verified_token;
            return res.json(errorResponse('token error', errorCode));
        }

        var userToken = await UserToken.findOne({where: {token}, include: User});
        // verify if token is from the owner.
        if (verified_token.username !== userToken.user.email) {
            return res.json(errorResponse('invalid token'));
        }

        next()
    }
};

function validateEmail(email) {
    var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegexp.test(email)
}
