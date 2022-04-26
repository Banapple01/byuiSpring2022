const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();

// GET /feed/posts
router.get('/', indexController.getData);
// GET /feed/posts
// localhost:8080/index/
router.use('/contacts', require('./contacts'));

module.exports = router;