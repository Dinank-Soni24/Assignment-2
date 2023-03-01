const express = require('express');
const router = express.Router();

//add controller
const userController = require('../controller/user');

//add middleware
const checkAuth = require('../middleware/check-auth');

// signup user
router.post('/signup', userController.userCreate);

// login user
router.post('/login', userController.userLogin);

// logout user
router.get('/logout',checkAuth, userController.userLogout);

// delete user
router.delete('/:userId',checkAuth , userController.userDelete);

module.exports = router;