// Importing framewoks
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const path = require('path');

const app = express();

// CORS Management
// CORS is enabled for all origins 
app.use(cors());

const db = require("./models/db");
db.sequelize.sync();

// Increase security
app.use(helmet());

app.use(express.json());

const userRoutes = require('./routes/users');
const publicationRoutes = require('./routes/publications');
const commentRoutes = require('./routes/comments');

//Specifies the path to signup or login
app.use('/api/auth', userRoutes);
//Specifies the path for actions on the publications
app.use('/api/publications', publicationRoutes);
//Specifies the path for actions on the comments
app.use('/api/comments', commentRoutes);

module.exports = app;