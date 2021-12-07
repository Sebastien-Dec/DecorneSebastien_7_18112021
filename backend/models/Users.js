const  { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true
    },

    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING(250),
        allowNull: false,
        validate: {
            is: /^[0-9a-zA-Z!/?$£%&]$/i
        }
    },

    type: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    state: {
        type: DataTypes.STRING(100)
    }
}, {
    sequelize,
    modelName: 'User'
});

console.log(User === sequelize.models.User);



