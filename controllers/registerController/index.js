var {User} = require('../../models/user');
var {encryptPassword} = require('../../utils/hashing');
var {successResponse} = require('../../utils/response');
module.exports = {
    Register: function (req, res) {
        var request = {email, password} = req.body;
        req.body.password = encryptPassword(password);
        User.create(request);
        return res.json(successResponse("user created"));
    }
};
