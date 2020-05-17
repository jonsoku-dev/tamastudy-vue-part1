const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const Post = require("../models/post.model");
const asyncHandler = require("../utils/asyncHandler");

exports.getPosts = asyncHandler(async (req, res, next) => {
  const cursor = req.query.cursor;
  const limit = parseInt(req.query.limit) || 4;

  let query = {};

  if (cursor) {
    query["_id"] = {
      $lt: cursor,
    };
  }

  let posts = await Post.find(query)
    .populate({
      path: "user",
      model: "User",
      select: "username avatar",
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
  const post = await Post.findByIdAndUpdate(
    { _id: postId },
    { $inc: { view: 1 } }
  ).populate({
    path: "user",
    model: "User",
    select: "username avatar",
  });
  if (!post) return next(`${postId}에 대한 포스트가 존재하지 않습니다. `);
  res.status(200).json(post);
});

exports.createPost = asyncHandler(async (req, res, next) => {
  let images = [];

  if (req.files && req.files.length !== 0) {
    console.log("이미지 리사이징 중 ...");
    req.files.map(async (file) => {
      const { filename: image } = file;
      try {
        await sharp(file.path)
          .resize(500)
          .jpeg({ quality: 90 })
          .toFile(
            path.join(
              __dirname,
              "..",
              "..",
              "public",
              "images",
              "post",
              `resized-${image}`
            )
          );
        fs.unlinkSync(file.path);
      } catch (error) {
        console.log("RESIZING ERROR : ", error);
      }
    });
    images = req.files.map((file) => `resized-${file.filename}`);
  }

  const newPost = await Post.create({
    ...req.body,
    images,
    user: req.user._id,
  });

  res.status(201).json(newPost);
});

exports.removePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);

  if (post.user.toString() !== req.user._id.toString()) {
    throw new Error("권한이 없습니다. ");
  }

  await post.remove();

  res.status(201).json({ msg: "포스트가 삭제되었습니다. ", ...post._doc });
});

exports.updatePost = asyncHandler(async (req, res, next) => {
  let post = await Post.findById(req.params.postId);

  if (post.user.toString() !== req.user._id.toString()) {
    throw new Error("권한이 없습니다. ");
  }

  post = await Post.findByIdAndUpdate(
    req.params.postId,
    { ...req.body },
    { new: true, runValidators: false }
  );

  res.status(201).json(post);
});

exports.updateLike = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);

  const hasUser = post.likes.find(
    (like) => like.toString() === req.user._id.toString()
  );

  if (hasUser) {
    throw new Error("이미 좋아요를 누르셨습니다. ");
  }

  post.likes = [...post.likes, req.user._id];

  await post.save();

  res.status(201).json(post);
});

exports.updateUnLike = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);

  const hasUser = post.likes.find(
    (like) => like.toString() === req.user._id.toString()
  );

  if (!hasUser) {
    throw new Error("좋아요를 누르시지 않았습니다. ");
  }

  post.likes = post.likes.filter((like) => like.toString() !== req.user._id);

  await post.save();

  res.status(201).json(post);
});
