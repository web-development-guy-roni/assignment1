// Guy-Rozenbaum-214424814-Roni-Taktook-213207640
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment_controller');

// יצירת תגובה חדשה
router.post('/', commentController.createComment);

// קבלת כל התגובות במערכת
router.get('/', commentController.getAllComments);

// קבלת תגובה ספציפית לפי ID
router.get('/:id', commentController.getCommentById);

// עדכון תגובה קיימת
router.put('/:id', commentController.updateComment);

// מחיקת תגובה
router.delete('/:id', commentController.deleteComment);

// שליפת כל התגובות עבור פוסט ספציפי (לפי ה-ID של הפוסט)
router.get('/post/:postId', commentController.getCommentsByPostId);

module.exports = router;
