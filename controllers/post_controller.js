// Guy-Rozenbaum-214424814-Roni-Taktuk-213207640
const Post = require('../models/post_model');

const addPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getAllPosts = async (req, res) => {
    try {
        const sender = req.query.sender;
        const posts = sender ? await Post.find({ sender }) : await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { addPost, getAllPosts, getPostById };