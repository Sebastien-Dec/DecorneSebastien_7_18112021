const express = require('express');
const router = express.Router();

//Access middleware
const userCtrl = require('../controllers/users');

//Require user authentication
const auth = require('../middleware/authorize');

//Creating routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/getuser', auth, userCtrl.getOneUser);

module.exports = router;
