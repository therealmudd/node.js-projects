const User = require('../models/userModel');

// CREATE
async function createUser(data){
    return await User.create(data);
}

// READ
async function getAllUsers(){
    return await User.findAll();
}

async function getUserById(id){
    return await User.findByPk(id);
}

// UPDATE
async function updateUser(id, data){
    return await User.update(data, {
        where: {id: id},
    });
}

// DELETE
async function deleteUser(id){
    return await User.destroy({
        where: {id: id},
    });
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};