// Importing framewoks
const express = require('express');
const helmet = require('helmet');
const sequelize = require('sequelize');

const app = express();

app.use(helmet());

// CORS Management
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})






app.use(express.json());

module.exports = app;