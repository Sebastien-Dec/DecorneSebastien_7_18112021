const Sequelize, DataTypes = require('sequelize');
const sequelize = new Sequelize('mysql::memory');

const Comment = sequelize.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    comment: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Comment'
});

console.log(Comment === sequelize.models.Comment);