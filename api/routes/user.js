const express = require('express');
const router = express.Router();

//add controller
const AdminController = require('../controller/user');

//add middleware
const checkAuth = require('../middleware/check-auth');

// signup admin
router.post('/signup',checkAuth, AdminController.Admin_create);

// login admin
router.post('/login', AdminController.Admin_login);

// logout admin
router.get('/logout',checkAuth, AdminController.Admin_logout);

// delete admin
router.delete('/:userId',checkAuth , AdminController.Admin_delete);

module.exports = router;