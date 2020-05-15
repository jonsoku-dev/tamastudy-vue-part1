<template>
  <section class="posts">
    <transition-group name="slide-up" tag="div" appear class="posts__wrapper container">
      <div
        class="posts__card posts-card"
        v-for="post in posts"
        :key="post._id"
        @click="
          $router.push({ name: 'page-post', params: { postId: post._id } })
        "
      >
        <div class="posts-card__box1">
          <img class="posts-card__img" :src="post.imgUrl" />
        </div>
        <div class="posts-card__box2">
          <h3 class="posts-card__title">{{ post.title }}</h3>
          <div class="posts-card__info">
            <span class="posts-card__view">view {{ post.view }}</span>
            <span class="posts-card__createdAt">
              {{
              post.createdAt | date
              }}
            </span>
            <span class="posts-card__username">{{ post.user && post.user.username }}</span>
          </div>
        </div>
      </div>
    </transition-group>
  </section>
</template>

<script>
import NProgress from "nprogress";
import { mapGetters } from "vuex";
import store from "../store";

export default {
  name: "PageAllPosts",
  beforeRouteEnter(to, from, next) {
    NProgress.start();
    const query = {}
    store.dispatch("getPosts", query).then(() => {
      NProgress.done();
      next();
    });
  },
  computed: {
    ...mapGetters(["posts", "pageInfo"]),
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow && this.pageInfo.hasNextPage) {
          NProgress.start();
          const query = {
            cursor: this.pageInfo.nextPageCursor
          }
          store.dispatch("getMorePosts", query).then(() => {
            NProgress.done();
          });
        }
      };
  },
  }
};
</script>

<style lang="scss" scoped>
.slide-up-enter {
  transform: translateY(10px); /* start 10px down*/
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 400ms cubic-bezier(0.83, -0.32, 1, 0.62);
}
.posts {
  margin: 16px 0;
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
  }
  &__card {
    border: 1px solid #eaeaea;
    padding: 32px;
    width: 100%;
    height: 400px; // todo
    display: flex;
    align-items: center;
  }
}

.posts-card {
  &__box1 {
    width: 100px;
    height: 100px;
    margin-right: 32px;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &__box2 {
    width: 100%;
    word-wrap: break-word;
    word-break: break-all;
  }
  &__title {
    margin-bottom: 8px;
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
    letter-spacing: 1px;
  }
}
</style>
