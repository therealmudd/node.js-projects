const Comment = require('../models/commentModel');

// CREATE
async function createComment(data){
    return await Comment.create(data);
}

// READ
async function getAllComments(){
    return await Comment.findAll();
}

async function getCommentById(id){
    return await Comment.findByPk(id);
}

// UPDATE
async function updateComment(id, data){
    return await Comment.update(data, {
        where: {id: id},
    });
}

// DELETE
async function deleteComment(id){
    return await Comment.destroy({
        where: {id: id},
    });
}

module.exports = {
    createComment,
    getAllComments,
    getCommentById,
    updateComment,
    deleteComment,
};