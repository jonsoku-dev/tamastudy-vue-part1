const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postCommentSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, '본문을 입력해주세요. '],
      max: [256, '256자 이내로 입력해주세요. '],
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, '평점을 입력해주세요. '],
      min: 0,
      max: 5,
    },
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    post: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Post',
    },
  },
  {
    timestamps: true,
  },
);

// 포스트 1개당 댓글 1개씩만
postCommentSchema.index({ post: 1, user: 1 }, { unique: true });

// 댓글 작성 시 ) post schema에 objectId 추가
postCommentSchema.pre('save', async function (next) {
  try {
    const Post = require('./post.model');
    console.log('post.comment 관련 작업중 (생성) ...'.blue);
    const post = await Post.findById({ _id: this.post });
    if (!post) {
      throw new Error('post가 존재하지 않습니다. ');
    }
    post.comments = [...post.comments, this._id];
    await post.save();
  } catch (error) {
    throw new Error(error);
  }
});

// 댓글 삭제 시 ) post schema에 objectId 제거
postCommentSchema.pre('remove', async function (next) {
  try {
    const Post = require('./post.model');
    console.log('post.comment 관련 작업중 (삭제) ...'.red);
    const post = await Post.findById({ _id: this.post });

    if (!post) {
      throw new Error('post가 존재하지 않습니다. ');
    }
    post.comments = post.comments.filter((comment) => comment.toString() !== this._id.toString());
    if (post.comments.length === 0) {
      post.averageRating = null;
    }
    await post.save();
  } catch (error) {
    throw new Error(error);
  }
});

// static 함수생성
postCommentSchema.statics.getAverageRating = async function (postId) {
  console.log('평균 리뷰점수를 계산중입니다...');
  const session = await this.startSession();
  session.startTransaction();
  const obj = await this.aggregate([
    {
      $match: { post: postId },
    },
    {
      $group: {
        _id: '$post',
        averageRating: { $avg: '$rating' },
      },
    },
  ]);
  try {
    const Post = require('./post.model');
    await Post.findByIdAndUpdate(postId, {
      averageRating: obj[0].averageRating,
    });
    await session.commitTransaction();
    await session.endSession();
  } catch (err) {
    console.error(err);
  }
};

// 리뷰점수 저장하고 난 후
postCommentSchema.post('save', function () {
  this.constructor.getAverageRating(this.post);
});

// 리뷰점수 지우기 전
postCommentSchema.pre('remove', function () {
  this.constructor.getAverageRating(this.post);
});

const PostComment = mongoose.model('PostComment', postCommentSchema);

module.exports = PostComment;
