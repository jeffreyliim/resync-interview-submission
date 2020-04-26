var {User} = require('../models/user');
var {errorResponse} = require('../utils/response');
var {verifyJwt} = require('../utils/hashing');
var {UserToken} = require('../models/user_token');

module.exports = {
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
