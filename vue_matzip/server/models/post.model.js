const mongoose = require('mongoose');
const slugify = require('slugify');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, '타이틀을 입력해주세요. '],
      max: [20, '20자 이내로 입력해주세요. '],
      trim: true,
    },
    description: {
      type: String,
      required: [true, '본문을 입력해주세요. '],
      max: [1000, '1000자 이내로 입력해주세요. '],
    },
    images: [
      {
        type: String,
      },
    ],
    view: {
      type: Number,
      default: 0,
    },
    website: {
      type: String,
    },
    phone: {
      type: String,
    },
    slug: {
      type: String,
    },
    location: {
      address: {
        type: String,
      },
      lng: {
        type: Number,
      },
      lnt: {
        type: Number,
      },
    },
    averageRating: {
      type: Number,
      min: 0,
      max: 5,
    },
    averageLunchCost: {
      type: Number,
      max: 9999999,
    },
    averageDinnerConst: {
      type: Number,
      max: 9999999,
    },
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'PostComment',
      },
    ],
  },
  {
    timestamps: true,
  },
);

// image
postSchema.pre('save', function (next) {
  if (!this.isModified('images')) {
    return next();
  }
  this.images = this.images.map((image) =>
    image === '/images/post/noimage.jpg' ? null : '/images/post/noimage.jpg',
  );
  next();
});

// slug
postSchema.pre('save', function (next) {
  if (!this.isModified('slug')) {
    return next();
  }
  this.slug = slugify(this.title, { lower: true });
  next();
});

// 포스트 작성 시, 유저 스키마에 objectId 추가
postSchema.post('save', async function (next) {
  try {
    const User = require('./user.model');
    const user = await User.findById({ _id: this.user });
    user.posts = [...user.posts, this._id];
    await user.save();
  } catch (error) {
    throw new Error(error);
  }
});

// 포스트 삭제 시, 유저 스키마에 objectId 제거
postSchema.post('remove', async function (next) {
  try {
    const User = require('./user.model');
    const user = await User.findById({ _id: this.user });
    user.posts = user.posts.filter((post) => post.toString() !== this.user);
    await user.save();
  } catch (error) {
    throw new Error(error);
  }
});

// cascade post <-> postComment
postSchema.pre('remove', async function (next) {
  try {
    console.log(`${this._id}번 포스트와 연관 된 댓글을 지우는 중입니다 ... `);
    const PostComment = require('./postComment.model');
    await PostComment.remove({ post: this._id }).exec();
    next();
  } catch (error) {
    throw new Error(error);
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
