<template>
  <div class="post">
    <div class="post__wrapper container">
      <h1>PagePost</h1>
      <div class="post__container">
        <div class="post__imgbox">
          <img :src="post.imgUrl" alt="post-image" />
        </div>
        <div class="post__content">
          <h2 class="post__title">{{post.title}}</h2>
          <div class="post__info">
            <span class="post__view">view {{post.view}}</span>
            <span class="post__createdAt">{{post.createdAt | date}}</span>
            <span class="post__username">{{post.user && post.user.username}}</span>
          </div>
          <p class="post__description">{{post.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PagePost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    word-wrap: break-word;
    word-break: break-all;
  }
  &__info {
    margin-bottom: 8px;
    > span {
      border-radius: 8px;
      padding: 2px 4px;
      font-size: 8px;
      color: white;
      &:not(:last-of-type) {
        margin-right: 4px;
      }
    }
  }
  &__view {
    background: #0984e3;
  }
  &__createdAt {
    background: #fdcb6e;
  }
  &__username {
    background: #6c5ce7;
  }
  &__description {
  }
}
</style>
