const express = require('express');
const commentService = require('../services/commentService');
const router = express.Router();

// CREATE
router.post('/comment', async (req, res) => {
    console.log(req.body)
    const comment = await commentService.createComment(req.body);
    //res.json(comment);
    res.redirect("/");
});

// READ
router.get('/comments', async (req, res) => {
    const comments = await commentService.getAllComments();
    res.json(comments);
});

router.get('/comment/:commentId', async (req, res) => {
    const comment = await commentService.getCommentById(req.params.commentId);
    res.json(comment);
});

// UPDATE
router.patch('/comment/:commentId', async (req, res) => {
    const comment = await commentService.updateComment(req.params.commentId, req.body);
    res.json(comment);
});

// DELETE
router.delete('/comment/:commentId', async (req, res) => {
    const comment = await commentService.deleteComment(req.params.commentId);
    res.json(comment);
});

module.exports = router;