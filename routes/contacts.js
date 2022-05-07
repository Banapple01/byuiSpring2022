const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');


// GET /feed/posts
router.get('/', contactController.getData);
// localhost:8080/contacts/
router.get('/:id', contactController.getSingleData);
// localhost:8080/contacts/:id

router.post('/', contactController.createData);

router.put('/:id', contactController.updateData);

router.delete('/:id', contactController.deleteData);

module.exports = router;