const db = require('./db');
const sequelize = db.sequelize;
const { DataTypes } = require('sequelize');

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

    type: {
        type: DataTypes.STRING(10),
    },

    state: {
        type: DataTypes.STRING(20)
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

module.exports = User;



