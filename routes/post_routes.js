// Guy-Rozenbaum-214424814-Roni-Taktook-213207640
const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller');

// הוספת פוסט חדש
router.post('/', postController.addPost);

// קבלת כל הפוסטים (כולל סינון לפי שולח אם קיים query param)
router.get('/', postController.getAllPosts);

// קבלת פוסט ספציפי לפי ה-ID שלו
router.get('/:id', postController.getPostById);

// עדכון פוסט קיים
router.put('/:id', postController.updatePost);

// מחיקת פוסט
router.delete('/:id', postController.deletePost);

module.exports = router;