<template>
  <article class="posts__wrapper">
    <div class="posts__header pd16">
      <div class="posts__avatar">
        <img
          src="https://stickershop.line-scdn.net/stickershop/v1/product/16687/LINEStorePC/main.png;compress=true"
          alt="avatar"
        />
      </div>
      <div class="posts__info">
        <p class="posts__author">{{ post.user.username }}</p>
        <p class="posts__location">{{ post.location.address }}</p>
      </div>
      <button class="posts__func">
        <md-button class="md-icon-button">
          <md-icon>more_horiz</md-icon>
        </md-button>
      </button>
    </div>
    <div class="posts__thumbnail">
      <img
        src="https://ww.namu.la/s/d4c53737b61fec8cf0fa02206d85a5022fc5465593f2e0190648f7c5911acd836a5f7a1db0f19f0136ec1c178d782465a9455b31d178b79df5133fc6b493a41f2f0f4e4cc95b12b0f84732987c391c4d81b2f734052651f5506e5d91a15ad62f"
        alt="food"
      />
    </div>
    <div class="posts__content pd16">
      <div class="posts__content1">
        <strong class="posts__title posts__title--main">{{
          post.title
        }}</strong>
        <span class="posts__title posts__title--sub">{{ post.subTitle }}</span>
      </div>
      <div class="posts__content2">
        <div class="posts__price posts__price--lunch">
          <strong>
            <md-icon>brightness_5</md-icon>
          </strong>
          <span>~ ￥{{ post.averageLunchPrice }}</span>
        </div>
        <div class="posts__price posts__price--dinner">
          <strong>
            <md-icon>brightness_2</md-icon>
          </strong>
          <span>~ ￥{{ post.averageDinnerPrice }}</span>
        </div>
      </div>
      <div class="posts__content3">
        <span class="posts__desc posts__desc--text">{{
          post.description
        }}</span>
        <button
          class="posts__desc posts__desc--btn"
          @click.prevent="$router.push(`/post/${post._id}`)"
        >
          더보기
        </button>
      </div>
    </div>
    <div class="posts__bottom pd16">
      <div class="posts__etc posts__etc--review">
        <md-icon :class="{ 'no-star': !post.averageRating }">star</md-icon>
        <span>{{
          post.averageRating ? `${post.averageRating}` : "평점이 없습니다. "
        }}</span>
      </div>
      <div class="posts__etc posts__etc--like">
        <md-icon>favorite_border</md-icon>
        <span>{{ post.likes.length }}</span>
      </div>
      <div class="posts__etc posts__etc--comment">
        <md-icon>comment</md-icon>
        <span>{{ post.comments.length }}</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: Object,
  },
  created() {
    console.log(this.post);
  },
};
</script>

<style lang="scss" scoped>
.pd16 {
  padding: 0 16px;
}
.pd8 {
  padding: 0 8px;
}

.posts {
  * {
    font: {
      size: 12px;
      weight: 500;
    }
  }
  &__wrapper {
    display: grid;
    grid-gap: 16px;
    width: 60%;
    border: 1px solid #eaeaea;
    padding: 16px 0;
    margin: 8px auto;
  }
  // header
  &__header {
    display: flex;
    align-items: center;
  }
  &__avatar {
    width: 36px;
    height: 36px;
    margin-right: 8px;
    background: pink;
    border-radius: 50%;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  &__info {
    margin-right: auto;
  }
  &__author {
    font-weight: 700;
    font-size: 14px;
  }
  &__location {
    font-weight: 200;
    font-size: 14px;
  }
  &__func {
    border: none;
    background: inherit;
    outline: none;
    cursor: pointer;
  }

  &__thumbnail {
    width: 100%;
    > img {
      width: 100%;
      height: 100%;
      min-height: 380px;
      object-fit: cover;
    }
  }
  // content
  &__content {
    > div {
      margin: 8px 0;
    }
  }
  &__title {
    &--main {
      font: {
        size: 24px;
        weight: 700;
      }
      margin-right: 8px;
    }
    &--sub {
      color: #bcbcbc;
      font: {
        size: 18px;
        weight: 200;
      }
    }
  }
  // content2
  &__content2 {
    display: flex;
  }
  &__price {
    &--lunch {
      margin-right: 16px;
      i {
        background-color: #f39c12;
        border-radius: 8px;
        color: white;
        font-size: 12px !important;
        width: 20px !important;
        min-width: 20px !important;
        height: 20px !important;
      }
    }
    &--dinner {
      i {
        background-color: #336aa2;
        border-radius: 8px;
        color: white;
        font-size: 12px !important;
        width: 20px !important;
        min-width: 20px !important;
        height: 20px !important;
      }
    }
    i {
      margin-right: 4px;
    }
  }

  // content3
  &__content3 {
    display: grid;
    grid-template-columns: 10fr 40px;
  }
  &__desc {
    &--text {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &--btn {
      border: none;
      background: inherit;
      color: #bcbcbc;
      outline: none;
      cursor: pointer;
      text-align: right;
    }
  }
  // bottom
  &__bottom {
    display: flex;
    align-items: center;
    > div {
      &:not(:last-of-type) {
        margin-right: 16px;
      }
    }
  }
  &__etc {
    i {
      margin-right: 4px;
      width: 20px !important;
      min-width: 20px !important;
      height: 20px !important;
    }
    &--review {
      i {
        color: rgb(255, 201, 83);
        &.no-star {
          color: grey;
        }
      }
    }
    &--like {
      i {
        font-size: 18px !important;
      }
    }
    &--comment {
      i {
        font-size: 18px !important;
      }
    }
  }
}
</style>
