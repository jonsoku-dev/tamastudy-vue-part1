<template>
  <section>
    <article class="post container">
      <div class="post__wrapper">
        <div class="post__thumbnail">
          <img
            :src="
              post.images.length > 0
                ? post.images[0]
                : 'https://recipe1.ezmember.co.kr/cache/recipe/2016/07/02/40c4f639ca973d9acccecdf7cbe0cbc41.jpg'
            "
            alt="food"
          />
        </div>
        <div class="post__header pd16">
          <div class="post__avatar">
            <img
              src="https://stickershop.line-scdn.net/stickershop/v1/product/16687/LINEStorePC/main.png;compress=true"
              alt="avatar"
            />
          </div>
          <div class="post__info">
            <p class="post__author">
              {{ post.user.username }}
            </p>
            <p class="post__location">
              {{ post.location.address }}
            </p>
          </div>
          <button class="post__func">
            <md-button class="md-icon-button">
              <md-icon>more_horiz</md-icon>
            </md-button>
          </button>
        </div>
        <div class="post__content pd16">
          <div class="post__content1">
            <strong class="post__title post__title--main">
              {{ post.title }}
            </strong>
            <span class="post__title post__title--sub">
              {{ post.subTitle }}
            </span>
          </div>
          <div class="post__content2">
            <div class="post__price post__price--lunch">
              <strong>
                <md-icon>brightness_5</md-icon>
              </strong>
              <span>~ ￥{{ post.averageLunchPrice }}</span>
            </div>
            <div class="post__price post__price--dinner">
              <strong>
                <md-icon>brightness_2</md-icon>
              </strong>
              <span>~ ￥{{ post.averageDinnerPrice }}</span>
            </div>
          </div>
          <div class="post__content3">
            <div class="post__etc post__etc--review">
              <md-icon :class="{ 'no-star': !post.averageRating }"
                >star</md-icon
              >
              <span>{{
                post.averageRating
                  ? `${post.averageRating}`
                  : "평점이 없습니다. "
              }}</span>
            </div>
            <div class="post__etc post__etc--like">
              <md-icon>favorite_border</md-icon>
              <span>{{ post.likes.length }}</span>
            </div>
            <div class="post__etc post__etc--comment">
              <md-icon>comment</md-icon>
              <span>{{ post.comments.length }}</span>
            </div>
          </div>
        </div>
        <div class="post__description">
          <p class="post__desc post__desc--text">
            {{ post.description }}
          </p>
        </div>
      </div>
    </article>
    <article class="pcomment-input container">
      <fieldset class="pcomment-input__wrapper">
        <input
          class="pcomment-input__input"
          type="text"
          placeholder="댓글 달기..."
        />
      </fieldset>
    </article>
    <article class="pcomment container">
      <div class="pcomment__wrapper">
        <div class="pcomment__avatar">
          <img
            src="https://stickershop.line-scdn.net/stickershop/v1/product/16687/LINEStorePC/main.png;compress=true"
            alt="avatar"
          />
        </div>
        <div class="pcomment__content">
          <div class="pcomment__info">
            <div class="pcomment__infobox pcomment__infobox--1">
              <strong>짬뽕</strong><span>3 days ago</span>
            </div>
            <div class="pcomment__infobox pcomment__infobox--2">
              <md-icon class="pcomment__gradeicon">grade</md-icon
              ><md-icon class="pcomment__gradeicon">grade</md-icon
              ><md-icon class="pcomment__gradeicon">grade</md-icon
              ><md-icon class="pcomment__gradeicon">grade</md-icon
              ><md-icon class="pcomment__gradeicon">grade</md-icon>
            </div>
          </div>
          <div class="pcomment__textbox">
            <p class="pcomment__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quaerat temporibus laboriosam optio nam nemo libero autem nostrum
              eum. Dolore sit illum accusantium ea eveniet debitis temporibus
              quidem voluptate pariatur!
            </p>
          </div>
        </div>
      </div>
      <div class="pcomment__wrapper">
        <div class="pcomment__avatar">
          <img
            src="https://stickershop.line-scdn.net/stickershop/v1/product/16687/LINEStorePC/main.png;compress=true"
            alt="avatar"
          />
        </div>
        <div class="pcomment__content">
          <div class="pcomment__info">
            <div class="pcomment__infobox pcomment__infobox--1">
              <strong>짬뽕</strong><span>3 days ago</span>
            </div>
            <div class="pcomment__infobox pcomment__infobox--2">
              <md-icon class="pcomment__gradeicon">grade</md-icon
              ><md-icon class="pcomment__gradeicon">grade</md-icon
              ><md-icon class="pcomment__gradeicon">grade</md-icon
              ><md-icon class="pcomment__gradeicon">grade</md-icon
              ><md-icon class="pcomment__gradeicon">grade</md-icon>
            </div>
          </div>
          <div class="pcomment__textbox">
            <p class="pcomment__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quaerat temporibus laboriosam optio nam nemo libero autem nostrum
              eum. Dolore sit illum accusantium ea eveniet debitis temporibus
              quidem voluptate pariatur!
            </p>
          </div>
        </div>
      </div>
      <div class="pcomment__wrapper">
        <div class="pcomment__avatar">
          <img
            src="https://stickershop.line-scdn.net/stickershop/v1/product/16687/LINEStorePC/main.png;compress=true"
            alt="avatar"
          />
        </div>
        <div class="pcomment__content">
          <div class="pcomment__info">
            <div class="pcomment__infobox pcomment__infobox--1">
              <strong>짬뽕</strong><span>3 days ago</span>
            </div>
            <div class="pcomment__infobox pcomment__infobox--2">
              <md-icon class="pcomment__gradeicon">grade</md-icon
              ><md-icon class="pcomment__gradeicon">grade</md-icon
              ><md-icon class="pcomment__gradeicon">grade</md-icon
              ><md-icon class="pcomment__gradeicon">grade</md-icon
              ><md-icon class="pcomment__gradeicon">grade</md-icon>
            </div>
          </div>
          <div class="pcomment__textbox">
            <p class="pcomment__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quaerat temporibus laboriosam optio nam nemo libero autem nostrum
              eum. Dolore sit illum accusantium ea eveniet debitis temporibus
              quidem voluptate pariatur!
            </p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PagePost",
  methods: {
    ...mapActions("postState", ["fetchPost"]),
  },
  computed: {
    ...mapGetters("postState", ["post"]),
  },
  created() {
    const postId = this.$route.params.postId;
    this.fetchPost(postId);
    console.log(this.post);
  },
};
</script>

<style lang="scss" scoped>
.post {
  &__wrapper {
    padding: 32px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(10, 60px);
    grid-template-areas:
      "img img header header"
      "img img info info"
      "img img info info"
      "img img desc desc"
      "img img desc desc"
      "img img desc desc"
      "img img desc desc"
      "img img desc desc"
      "img img desc desc"
      "img img desc desc";
  }
  &__thumbnail {
    grid-area: img;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 48px;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
  // content
  &__content {
    grid-area: info;
  }
  &__bottom {
    grid-area: bottom;
  }
  &__description {
    grid-area: desc;
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
    display: flex;
    align-items: center;
    > div {
      &:not(:last-of-type) {
        margin-right: 16px;
      }
    }
  }
  &__etc {
    display: flex;
    align-items: center;
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
  // description
  &__desc {
    height: 100%;
    overflow-y: scroll;
  }
}
.pcomment-input {
  &__wrapper {
    border: none;
    padding: 0 32px 16px;
  }
  &__input {
    width: 100%;
    height: 40px;
    padding: 16px;
    outline: none;
  }
}
.pcomment {
  padding: 0 32px 32px;

  &__wrapper {
    display: flex;
    align-items: center;
    margin: 24px 0;
  }
  &__avatar {
    margin-right: 16px;
    width: 60px;
    min-width: 60px;
    height: 60px;
    min-height: 60px;
    background-color: pink;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  &__info {
    display: flex;
  }
  &__infobox {
    margin-right: 16px;
    margin-bottom: 8px;
    &--1 {
      > strong {
        font: {
          size: 18px;
          font-weight: 700;
        }
        margin-right: 8px;
      }
      > span {
        font: {
          size: 12px;
          font-weight: 300;
        }
        color: #747474;
      }
    }
    &--2 {
      i {
        color: #f9ca24;
      }
    }
  }
}
</style>
