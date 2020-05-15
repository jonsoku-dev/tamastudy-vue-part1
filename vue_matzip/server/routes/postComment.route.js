const express = require('express');
const {
  createPostComment,
  getPostComments,
  removePostComment,
} = require('../controllers/postComment.controller');

// middleware
const isAuthenticated = require('../middlewares/isAuthenticated.middleware');

const router = express.Router({ mergeParams: true });

// 컨트롤러를 불러온다. (즉, 이전에 작성했던 '로직'만 컨트롤러로 옮겼다고 생각하면 된다.)

router.route('/create').post(isAuthenticated, createPostComment);
router.route('/').get(getPostComments);
router.route('/:postCommentId/remove').delete(isAuthenticated, removePostComment);

module.exports = router;
