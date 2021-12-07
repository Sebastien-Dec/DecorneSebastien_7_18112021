// Importing framewoks
const express = require('express');
const helmet = require('helmet');
const { Sequelize } = require('sequelize');
const userRoutes = require('./routes/users');
const publicationRoutes = require('./routes/publications');
const commentRoutes = require('./routes/comments');
const path = require('path');

const app = express();

// CORS Management
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

// Connection to DataBase Mysql
const sequelize = new Sequelize('groupomania', 'moderator', 'moderator', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

// Increase security
app.use(helmet());

app.use(express.json());

//Specifies the path to signup or login
app.use('/api/auth', userRoutes);
//Specifies the path for actions on the publications
app.use('/api/publications', publicationRoutes);
//Specifies the path for actions on the comments
app.use('/api/comments', commentRoutes);

module.exports = app;