const express = require('express');
const router = express.Router();

////add controller
const publicPostController = require('../controller/publicPost')

//for public
router.get('/post', publicPostController.publicPost);
router.get('/post/:postsId', publicPostController.publicSelectedPost);
router.get('/name', publicPostController.publicPostName);
router.get('/content', publicPostController.publicPostContent);
router.get('/category', publicPostController.publicPostCategory);

module.exports = router;