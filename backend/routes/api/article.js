const express = require('express');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Profile = require('../../models/Profile');
const Article = require('../../models/Article');

const router = express.Router();

// VALIDATION
const checkArticlesPost = [
    check('title', 'Title is required').not().isEmpty(),
    check('body', 'Body is required').not().isEmpty(),
    check('image', 'Image is required').not().isEmpty(),
    check('source', 'Source is required').not().isEmpty()
];

// ROUTES

// @route   Articles api/articles
// @desc    Create an article
// @access  private
router.post('/', [auth, checkArticlesPost], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
        return res.status(400).json({ errors: errors.array });
    }

    try {
        const user = await User.findById(req.user.id).select('-password');
        const newArticle = new Article({
            title: req.body.title,
            body: req.body.body,
            image: req.body.image,
            source: req.body.source
        });

        const article = await newArticle.save();
        res.json(article);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// @route   GET api/articles
// @desc    Gets all articles
// @access  Public
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
