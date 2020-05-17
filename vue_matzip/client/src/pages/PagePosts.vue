<template>
  <div>
    <h2>PagePosts</h2>
    <section>
      <post-card v-for="post in posts" :key="post.id" :post="post" />
    </section>
    <section class="posts container">
      <article class="posts__wrapper">
        <div class="posts__header pd16">
          <div class="posts__avatar">
            <img
              src="https://stickershop.line-scdn.net/stickershop/v1/product/16687/LINEStorePC/main.png;compress=true"
              alt="avatar"
            />
          </div>
          <div class="posts__info">
            <p class="posts__author">jongseok</p>
            <p class="posts__location">mizonokuchi</p>
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
            <strong class="posts__title posts__title--main">타마반점</strong>
            <span class="posts__title posts__title--sub">가상의 중국집</span>
          </div>
          <div class="posts__content2">
            <div class="posts__price posts__price--dinner">
              <strong>
                <md-icon>brightness_2</md-icon>
              </strong>
              <span>~ ￥2000</span>
            </div>
            <div class="posts__price posts__price--lunch">
              <strong>
                <md-icon>brightness_5</md-icon>
              </strong>
              <span>~ ￥1000</span>
            </div>
          </div>
          <div class="posts__content3">
            <span class="posts__desc posts__desc--text"
              >왜 미조노구치에는 짜장면집이 없는걸까...
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
              샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라</span
            >
            <button class="posts__desc posts__desc--btn">더보기</button>
          </div>
        </div>
        <div class="posts__bottom pd16">
          <div class="posts__etc posts__etc--review">
            <md-icon>star</md-icon>
            <span>5.0</span>
          </div>
          <div class="posts__etc posts__etc--like">
            <md-icon>favorite_border</md-icon>
            <span>2.5k</span>
          </div>
          <div class="posts__etc posts__etc--comment">
            <md-icon>comment</md-icon>
            <span>154</span>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PostCard from "@/components/PostCard.vue";

export default {
  name: "PagePosts",
  components: {
    PostCard,
  },
  computed: {
    ...mapGetters("postState", ["posts", "pageInfo"]),
  },
  methods: {
    ...mapActions("postState", ["fetchPosts"]),
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style lang="scss" scoped></style>
