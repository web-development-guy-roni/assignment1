// Guy-Rozenbaum-214424814-Roni-Taktuk-213207640
const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller');

// הוספת פוסט חדש
router.post('/', postController.addPost);

module.exports = router;