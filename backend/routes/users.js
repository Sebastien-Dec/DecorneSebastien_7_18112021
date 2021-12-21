const express = require('express');
const router = express.Router();

//Access middleware
const userCtrl = require('../controllers/users');

//Creating routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/getuser', userCtrl.getOneUser);

module.exports = router;
