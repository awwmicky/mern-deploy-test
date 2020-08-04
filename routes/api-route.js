const express = require('express')
const router = express.Router();
const blog_post = require('../controllers/blog-post.js');

/* HTTP Request — './api/___ */
router.get('/view-all-posts', blog_post.view_posts)
router.post('/create-post', blog_post.create_posts)

module.exports = router;