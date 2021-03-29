const express = require('express');
const router = express.Router();

const controller = require('../controllers/article');

//api/article
router.get('/', controller.getAllArticles);
router.get('/:id', controller.getArticlesBySection);
router.get('/article/:id', controller.getArticle);
router.post('/search', controller.searchArticle);
router.post('/:section_id', controller.createArticle);
router.delete('/:id', controller.deleteArticle);

module.exports = router;
