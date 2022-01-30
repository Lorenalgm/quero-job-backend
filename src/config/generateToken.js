const jwt = require('jsonwebtoken');

module.exports = function generateToken(params = {}){
    return jwt.sign(params, process.env.AUTH_SECRET, {
        expiresIn: 10800,
    });
}