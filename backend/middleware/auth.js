const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {

    const authSecret = process.env.AUTH_SECRET || config.get('authSecret');
    if (!authSecret) {
        throw new Error("Authentication secret was not specified. Specify a secret to use as an environment variable.");
    }

    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ msg: 'Token not present' });
    }

    try {
        const result = jwt.verify(token, authSecret);
        req.user = result.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token not valid' });
    }
};
