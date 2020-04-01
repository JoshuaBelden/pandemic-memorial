const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {

    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'Token not present' });
    }

    try {
        const result = jwt.verify(token, config.get('authSecret'));
        req.user = result.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token not valid' });
    }
};