const express = require('express');
const router = express.Router();

////add controller
const publicPostController = require('../controller/publicPost')

//for public
router.get('/post', publicPostController.public_post);
router.get('/post/:postsId', publicPostController.public_selected_post);
router.get('/name', publicPostController.public_post_name);
router.get('/content', publicPostController.public_post_content);
router.get('/category', publicPostController.public_post_category);

module.exports = router;