const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Task = sequelize.define('Task', {
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

sequelize.sync();

module.exports = Task;