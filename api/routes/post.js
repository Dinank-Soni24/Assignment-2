const express = require('express');
const router = express.Router();

//add controller
const postController = require('../controller/post');

//add middleware for authontication
const checkAuth = require('../middleware/check-auth');

//get requerst for all
router.post('/',checkAuth , postController.postCreate);
router.get('/',checkAuth , postController.postGetAll);
router.get('/:postsId',checkAuth , postController.postGetOne);
router.patch('/:postsId',checkAuth , postController.postUpdate);
router.delete('/:postsId',checkAuth , postController.postDelete);



module.exports = router;