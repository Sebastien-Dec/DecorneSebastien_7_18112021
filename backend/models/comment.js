const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory');

const Comment = sequelize.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },

    users_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },

    publications_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Publications',
            key: 'id'
        }
    }
}, {
    classMethods: {
    associate: function(models) {
        models.Comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                name: 'users_id'
            }
        }),
        models.Comment.belongsTo(models.Publication, {
            foreignKey: {
                allowNull: false,
                name: 'publications_id'
            }
        })
    }
}
}, {
    sequelize,
    modelName: 'Comment'
});

console.log(Comment === sequelize.models.Comment);
module.exports = sequelize.models.Comment;