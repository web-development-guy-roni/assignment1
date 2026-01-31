// Guy-Rozenbaum-214424814-Roni-Taktook-213207640
const Comment = require('../models/comment_model');

// 1. יצירת תגובה חדשה (Create)
const createComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        const savedComment = await comment.save();
        res.status(201).json(savedComment); // החזרת סטטוס 201 להצלחת יצירה
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// 2. קבלת כל התגובות במערכת (Read All)
const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 3. קבלת תגובה ספציפית לפי ה-ID שלה (Read One)
const getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ message: "Comment not found" });
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 4. עדכון תגובה קיימת (Update)
const updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // מחזיר את המסמך המעודכן
        );
        if (!updatedComment) return res.status(404).json({ message: "Comment not found" });
        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// 5. מחיקת תגובה (Delete)
const deleteComment = async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) return res.status(404).json({ message: "Comment not found" });
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 6. שליפת כל התגובות עבור פוסט ספציפי (Filter by Post ID)
const getCommentsByPostId = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createComment,
    getAllComments,
    getCommentById,
    updateComment,
    deleteComment,
    getCommentsByPostId
};
