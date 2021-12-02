const Sequelize, DataTypes = require('sequelize');
const sequelize = new Sequelize('mysql::memory');

const Publication = sequelize.define('Publication', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    gifUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },

    text: {
        type: DataTypes.STRING(300)
    }
}, {
    sequelize,
    modelName: 'Publication'
});

console.log(Publication === sequelize.models.Publication);