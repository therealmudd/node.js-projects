const express = require('express');
const userService = require('../services/userService');
const router = express.Router();

// CREATE
router.post('/user', async (req, res) => {
    const user = await userService.createUser(req.body);
    res.json(user);
});

// READ
router.get('/users', async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
});

router.get('/user/:userId', async (req, res) => {
    const user = await userService.getUserById(req.params.userId);
    res.json(user);
});

// UPDATE
router.patch('/user/:userId', async (req, res) => {
    const user = await userService.updateUser(req.params.userId, req.body);
    res.json(user);
});

// DELETE
router.delete('/user/:userId', async (req, res) => {
    const user = await userService.deleteUser(req.params.userId);
    res.json(user);
});

module.exports = router;