const express = require('express');
const router = express.Router();

//add controller
const categoryController = require('../controller/category');

//add middleware
const checkAuth = require('../middleware/check-auth');

//get requerst for all
router.post('/',checkAuth , categoryController.category_create);
router.get('/',checkAuth , categoryController.category_get_all);
router.get('/:categoryId',checkAuth , categoryController.category_get_one);
router.patch('/:categoryId',checkAuth , categoryController.category_update);
router.delete('/:categoryId',checkAuth , categoryController.category_deleted);

module.exports = router;
