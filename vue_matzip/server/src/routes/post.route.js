const express = require('express');
const postCommentRouter = require('./postComment.route');
const isAuthenticated = require('../middlewares/isAuthenticated.middleware');
const {
  getPost,
  getPosts,
  createPost,
  removePost,
  updatePost,
  updateLike,
  updateUnLike,
} = require('../controllers/post.controller');

const roleChecker = require('../middlewares/roleChecker.middleware');

const router = express.Router();

// merge Route
router.use('/:postId/comment', postCommentRouter);

router.get('/', roleChecker('user', 'admin'), getPosts);
router.get('/:postId', getPost);
router.post('/create', isAuthenticated, createPost);
router.delete('/:postId/remove', isAuthenticated, removePost);
router.put('/:postId/update', isAuthenticated, updatePost);
router.put('/:postId/like', isAuthenticated, updateLike);
router.put('/:postId/unlike', isAuthenticated, updateUnLike);

module.exports = router;
