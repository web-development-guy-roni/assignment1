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

module.exports = { addPost };