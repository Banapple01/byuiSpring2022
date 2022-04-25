const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();

// GET /feed/posts
router.get('/', indexController.getData);
// localhost:8080/index/
module.exports = router;