const asyncHandler = require('../middlewares/asyncHandler.middleware');
const User = require('../models/user.model');

exports.registerHandler = asyncHandler(async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = await User.create({
    username: username,
    email: email,
    password: password,
  });

  const token = newUser.createJwt();

  res.status(201).json({
    token,
    user: newUser,
  });
});

exports.loginHandler = asyncHandler(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email: email });

  if (!user) {
    throw new Error('이메일이 존재하지 않습니다. ');
  }

  const isMatched = await user.comparePassword(password);

  if (!isMatched) {
    throw new Error('비밀번호가 일치하지 않습니다. ');
  }

  const token = user.createJwt();

  res.status(201).json({
    token,
    user,
  });
});

exports.getMeHandler = asyncHandler(async (req, res, next) => {
  const user = await User.findById({ _id: req.user._id }).populate({
    path: 'posts',
    model: 'Post',
    select: 'title',
  });

  if (!user) {
    throw new Error('유저가 존재하지 않습니다. ');
  }

  res.status(200).json(user);
});

exports.deleteUserHandler = asyncHandler(async (req, res, next) => {
  const currentUser = await User.findById({ _id: req.user._id });
  await currentUser.remove();
  res.json({
    message: '유저가 삭제되었습니다. ',
  });
});
