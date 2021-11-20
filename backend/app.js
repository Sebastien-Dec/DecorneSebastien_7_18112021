// Importing framewoks
const express = require('express');
const mysql = require('@mysql/xdevapi');

const app = express();

// CORS Management
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

// Connection to MySQL
/*const mySession = mysql.getSession( {
    host: 'localhost',
    port: 3306,
    user: 'user',
    password: 'password'
});*/




app.use(express.json());

module.exports = app;