var crypto = require('crypto');
var fs = require('fs');
var config = require('../config/config');
var jwt = require('jsonwebtoken');

var {
    public_key, private_key,
    jwtKey, expiresIn
} = config.development;

exports.encryptPassword = function (text) {
    var pem = fs.readFileSync('/code/' + public_key);
    var pub_key = pem.toString('ascii');
    var buffer = Buffer.from(text);
    return crypto.publicEncrypt(pub_key, buffer).toString("base64")
};

exports.decryptPassword = function (hash) {
    var pem = fs.readFileSync('/code/' + private_key);
    var priv_key = pem.toString('ascii');
    var buffer = Buffer.from(hash.toString(), 'base64');
    return crypto.privateDecrypt(priv_key, buffer).toString()
};

exports.generateJwt = function (email) {
    return jwt.sign({username: email}, jwtKey, {
        expiresIn,
    });
};

exports.verifyJwt = async function (token) {
    return new Promise(async resolve => {
        try {
            var decoded = jwt.verify(token, jwtKey);
            return resolve(decoded)
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                // if the error thrown is because the JWT is unauthorized, return a 401 error
                return resolve(401)
            }
            // otherwise, return a bad request error
            return resolve(400)
        }
    })
};
