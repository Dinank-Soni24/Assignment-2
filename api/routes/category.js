const express = require('express');
const router = express.Router();

//add controller
const categoryController = require('../controller/category');

//add middleware
const checkAuth = require('../middleware/check-auth');

//get requerst for all
router.post('/',checkAuth , categoryController.categoryCreate);
router.get('/',checkAuth , categoryController.categoryGetAll);
router.get('/:categoryId',checkAuth , categoryController.categoryGetOne);
router.patch('/:categoryId',checkAuth , categoryController.categoryUpdate);
router.delete('/:categoryId',checkAuth , categoryController.categoryDeleted);

module.exports = router;
