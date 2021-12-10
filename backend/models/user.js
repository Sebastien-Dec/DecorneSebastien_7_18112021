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
        unique: true,
        validate: {
            isEmail: true,
        }
    },

    password: {
        type: DataTypes.STRING(250),
        allowNull: false,
        /*validate: {
            is: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i
        }*/
    },

    employee: {
        type: DataTypes.BOOLEAN,
    },

    moderator: {
        type: DataTypes.BOOLEAN,
    },

    state: {
        type: DataTypes.STRING(100)
    }
}, {
    classMethods: {
        associate: function(models) {
            models.User.hasMany(models.Publication),
            models.User.hasMany(models.Comment)
        }
    }
}, 
{
    sequelize,
    modelName: 'User'
});

console.log(User === sequelize.models.User);
module.exports = sequelize.models.User;



