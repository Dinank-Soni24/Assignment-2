const express = require('express');
const router = express.Router();

//add controller
const postController = require('../controller/post');

//add middleware for authontication
const checkAuth = require('../middleware/check-auth');

//get requerst for all
router.post('/',checkAuth , postController.post_create);
router.get('/',checkAuth , postController.post_get_all);
router.get('/:postsId',checkAuth , postController.post_get_one);
router.patch('/:postsId',checkAuth , postController.post_update);
router.delete('/:postsId',checkAuth , postController.post_delete);



module.exports = router;