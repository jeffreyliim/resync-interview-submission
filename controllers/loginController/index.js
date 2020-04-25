var {User} = require('../../models/user');
var {UserToken} = require('../../models/user_token');
var {decryptPassword, generateJwt} = require('../../utils/hashing');
var {errorResponse, successResponse} = require('../../utils/response');
var config = require('../../config/config');
var {expiresIn} = config.development;

module.exports = {
    Login: async function (req, res) {
        var {email, password} = req.body;
        var user = await User.findOne({where: {email}, include: UserToken});
        // validate credentials, either user doesnt exist or wrong password
        if (!user || user && decryptPassword(user.password) !== password) {
            return res.json(errorResponse('Incorrect credentials'))
        }
        // user is validated, create or refresh token
        if (!user.userToken) {
            return res.json(successResponse(createToken(user, email)))
        }
        var userId = user.id;
        var refreshCount = user.userToken.refreshCount;
        return res.json(successResponse(refreshToken(userId, email, refreshCount)))
    },

    RefreshToken: async function (req, res) {
        var {userId, token} = req.body;
        var userToken = await UserToken.findOne({
            where: {userId, token},
            include: [{model: User, attributes: ['id', 'email']}]
        });
        if (userToken) {
            var email = userToken.user.email;
            var refreshCount = userToken.refreshCount;
            return res.json(successResponse(refreshToken(userId, email, refreshCount)))
        }
        return res.json(errorResponse('Invalid userId or token'))
    }
};

function createToken(user, email) {
    var request = {
        userId: user.id,
        token: generateJwt(email),
        expiresIn: setNewExpiry(),
        refreshCount: 0
    };
    UserToken.create(request);
    return request
}

function refreshToken(userId, email, refresh) {
    var request = {
        token: generateJwt(email),
        expiresIn: setNewExpiry(),
        refreshCount: refresh + 1
    };

    UserToken.update(request, {where: {userId}});
    return request
}

function setNewExpiry() {
    var currDate = new Date();
    currDate.setTime(currDate.getTime() + expiresIn * 1000);
    return currDate
}
