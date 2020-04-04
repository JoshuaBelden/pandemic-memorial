const bcrypt = require('bcryptjs');
const express = require('express');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const config = require('config');

const authSecret = process.env.AUTH_SECRET || config.get('authSecret');
if (!authSecret) {
    throw new Error("Authentication secret was not specified. Specify a secret to use as an environment variable.");
}

const router = express.Router();

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'A valid email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 })
],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }

            const avatar = gravatar.url(email, { s: '200', d: 'mm' });

            user = new User({
                name,
                email,
                password,
                avatar
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(payload, authSecret, { expiresIn: 3600 }, (err, token) => {
                if (err) {
                    throw err;
                }
                res.json({ token });
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });

module.exports = router;
