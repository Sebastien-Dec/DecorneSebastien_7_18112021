const db = require('./db');
const sequelize = db.sequelize;
const { DataTypes } = require('sequelize');

const Publication = sequelize.define('Publication', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    gifUrl: {
        type: DataTypes.STRING(500),
        allowNull: false
    },

    text: {
        type: DataTypes.STRING(255)
    },

    users_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    }
}, {
    classMethods: {
        associate: function(models) {
            models.Publication.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false,
                }
            }),
            models.Publication.hasMany(models.Comment)
        }
    }
}, {
    sequelize,
    modelName: 'Publication'
});

module.exports = Publication;