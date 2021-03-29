const express = require('express');
const router = express.Router();

const controller = require('../controllers/section');

//api/section
router.get('/', controller.getSections);
router.delete('/:id', controller.deleteSection);

module.exports = router;
