const express = require('express');
const postService = require('../services/postService');
const router = express.Router();

// CREATE
router.post('/post', async (req, res) => {
    const post = await postService.createPost(req.body);
    res.json(post);
});

// READ
router.get('/posts', async (req, res) => {
    const posts = await postService.getAllPosts();
    res.json(posts);
});

router.get('/post/:postId', async (req, res) => {
    const post = await postService.getPostById(req.params.postId);
    res.json(post);
});

// UPDATE
router.patch('/post/:postId', async (req, res) => {
    const post = await postService.updatePost(req.params.postId, req.body);
    res.json(post);
});

// DELETE
router.delete('/post/:postId', async (req, res) => {
    const post = await postService.deletePost(req.params.postId);
    res.json(post);
});

module.exports = router;