const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory');

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
            })
        }
    }
}, {
    sequelize,
    modelName: 'Publication'
});

console.log(Publication === sequelize.models.Publication);
module.exports = sequelize.models.Publication;