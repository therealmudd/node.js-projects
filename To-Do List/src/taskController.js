const express = require('express');
const taskService = require('./taskService');
const router = express.Router();

// CREATE
router.post('/task', async (req, res) => {
    const task = await taskService.createTask(req.body);
    res.json(task);
});

// READ
router.get('/tasks', async (req, res) => {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
});

router.get('/task-id/:taskId', async (req, res) => {
    const task = await taskService.getTaskById(req.params.taskId);
    res.json(task);
});

router.get('/task-author/:taskAuthor', async (req, res) => {
    const tasks = await taskService.getTasksByAuthor(req.params.taskAuthor);
    res.json(tasks);
});

// UPDATE
router.patch('/task/:taskId', async (req, res) => {
    const task = await taskService.updateTaskById(req.params.taskId, req.body);
    res.json(task);
});

// DELETE
router.delete('/task/:taskId', async (req, res) => {
    const task = await taskService.deleteTaskById(req.params.taskId);
    res.json(task);
});

module.exports = router;