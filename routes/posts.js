const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createPost, getPosts } = require('../controllers/postController');

// Create a Post
router.post('/', auth, createPost);

// Get All Posts
router.get('/', getPosts);

module.exports = router;
