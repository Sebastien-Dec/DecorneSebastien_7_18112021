const Sequelize, DataTypes = require('sequelize');
const sequelize = new Sequelize('mysql::memory');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    type: {
        type: DataTypes.STRING,
        allowNull: false
    },

    sate: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User'
});

console.log(User === sequelize.models.User);



