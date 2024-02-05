const Post = require('../models/postModel');

// CREATE
async function createPost(data){
    return await Post.create(data);
}

// READ
async function getAllPosts(){
    return await Post.findAll();
}

async function getPostById(id){
    return await Post.findByPk(id);
}

// UPDATE
async function updatePost(id, data){
    return await Post.update(data, {
        where: {id: id},
    });
}

// DELETE
async function deletePost(id){
    return await Post.destroy({
        where: {id: id},
    });
}

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
};