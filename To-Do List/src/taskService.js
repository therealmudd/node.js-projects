const Task = require('./taskModel');

// CREATE
async function createTask(data){
    return await Task.create(data);
}

// READ
async function getAllTasks() {
    return await Task.findAll();
}

async function getTaskById(taskId) {
    return await Task.findByPk(taskId);
}

async function getTasksByAuthor(author) {
    return (await Task.findAll()).filter(task => task.author === author);
}

// UPDATE
async function updateTaskById(taskId, data) {
    return await Task.update(data, {
        where: {id: taskId},
    });
}

// DELETE
async function deleteTaskById(taskId) {
    return await Task.destroy({
        where: {id: taskId},
    });
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    getTasksByAuthor,
    updateTaskById,
    deleteTaskById,
};