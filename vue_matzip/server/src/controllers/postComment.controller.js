const PostComment = require('../models/postComment.model');
const asyncHandler = require('../middlewares/asyncHandler.middleware');

exports.createPostComment = asyncHandler(async (req, res, next) => {
  const currentUserId = req.user._id;
  const currentPostId = req.params.postId;

  const newComment = await PostComment.create({
    ...req.body,
    user: currentUserId,
    post: currentPostId,
  });

  res.status(201).json(newComment);
});

exports.getPostComments = asyncHandler(async (req, res, next) => {
  const currentPostId = req.params.postId;

  const comments = await PostComment.find({ post: currentPostId })
    .populate({
      path: 'user',
      model: 'User',
      select: 'email',
    })
    .sort({ _id: -1 });

  res.status(201).json(comments);
});

exports.removePostComment = asyncHandler(async (req, res, next) => {
  const currentUserId = req.user._id;
  const currentPostCommentId = req.params.postCommentId;

  const comment = await PostComment.findById({ _id: currentPostCommentId });

  if (!comment) {
    throw new Error('코멘트가 존재하지 않습니다. ');
  }

  if (comment.user.toString() !== currentUserId.toString()) {
    throw new Error('권한이 없습니다. ');
  }

  await comment.remove();

  res.status(201).json({ msg: '댓글이 삭제되었습니다. ', ...comment._doc });
});

exports.updatePostComment = asyncHandler(async (req, res, next) => {
  const currentUserId = req.user._id;
  const currentPostCommentId = req.params.postCommentId;

  let comment = await PostComment.findById({ _id: currentPostCommentId });

  if (!comment) {
    throw new Error('코멘트가 존재하지 않습니다. ');
  }

  if (comment.user.toString() !== currentUserId.toString()) {
    throw new Error('권한이 없습니다. ');
  }

  comment = await PostComment.findByIdAndUpdate(
    { _id: currentPostCommentId },
    { ...req.body },
    { new: true, runValidators: false },
  );

  res.status(201).json(comment);
});
