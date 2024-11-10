 const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
        const post = new Post({ user: req.user.id, content: req.body.content });
        await post.save();
        res.json(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user', ['username']);
        res.json(posts);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};
