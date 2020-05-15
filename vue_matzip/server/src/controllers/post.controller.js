const Post = require('../models/post.model');
const asyncHandler = require('../middlewares/asyncHandler.middleware');

exports.getPosts = asyncHandler(async (req, res, next) => {
  const cursor = req.query.cursor;
  const limit = parseInt(req.query.limit) || 4;

  let query = {};

  if (cursor) {
    query['_id'] = {
      $lt: cursor,
    };
  }

  let posts = await Post.find(query)
    .populate({
      path: 'user',
      model: 'User',
      select: 'username',
    })
    .limit(limit + 1)
    .sort({ _id: -1 });

  const hasNextPage = posts.length > limit;

  posts = hasNextPage ? posts.slice(0, -1) : posts;

  res.status(200).json({
    postFeed: posts,
    pageInfo: {
      nextPageCursor: hasNextPage ? posts[posts.length - 1].id : null,
      hasNextPage,
    },
  });
});

exports.getPost = asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  const post = await Post.findByIdAndUpdate({ _id: postId }, { $inc: { view: 1 } }).populate({
    path: 'user',
    model: 'User',
    select: 'username',
  });
  if (!post) return next(`${postId}에 대한 포스트가 존재하지 않습니다. `);
  res.status(200).json(post);
});

exports.createPost = asyncHandler(async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const imgUrl = req.body.imgUrl ? req.body.imgUrl : 'no-image.jpg';

  const newPost = await Post.create({
    title: title,
    description: description,
    imgUrl: imgUrl,
    user: req.user._id,
  });

  res.status(201).json(newPost);
});

exports.removePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);

  if (post.user.toString() !== req.user._id.toString()) {
    throw new Error('권한이 없습니다. ');
  }

  await post.remove();

  res.status(201).json({ msg: '포스트가 삭제되었습니다. ', ...post._doc });
});

exports.updatePost = asyncHandler(async (req, res, next) => {
  let post = await Post.findById(req.params.postId);

  if (post.user.toString() !== req.user._id.toString()) {
    throw new Error('권한이 없습니다. ');
  }

  post = await Post.findByIdAndUpdate(
    req.params.postId,
    { ...req.body },
    { new: true, runValidators: false },
  );

  res.status(201).json(post);
});

exports.updateLike = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);

  const hasUser = post.likes.find((like) => like.toString() === req.user._id.toString());

  if (hasUser) {
    throw new Error('이미 좋아요를 누르셨습니다. ');
  }

  post.likes = [...post.likes, req.user._id];

  await post.save();

  res.status(201).json(post);
});

exports.updateUnLike = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);

  const hasUser = post.likes.find((like) => like.toString() === req.user._id.toString());

  if (!hasUser) {
    throw new Error('좋아요를 누르시지 않았습니다. ');
  }

  post.likes = post.likes.filter((like) => like.toString() !== req.user._id);

  await post.save();

  res.status(201).json(post);
});
