<template>
  <div class="home">
    <div class="home__wrapper container">
      <h1>PageHome</h1>
      <router-link :to="{ name: 'page-posts' }" tag="h4">
        <a>POSTS</a>
      </router-link>

      <router-link :to="{ name: 'mock-posts' }" tag="h4">
        <a>MOCK UP PAGE (Post List)</a>
      </router-link>

      <router-link :to="{ name: 'mock-post' }" tag="h4">
        <a>MOCK UP PAGE (Post Detail)</a>
      </router-link>

      <router-link :to="{ name: 'page-firebase-get-posts' }" tag="h4">
        <a>get all post with firebase</a>
      </router-link>

      <router-link :to="{ name: 'page-firebase-create-post' }" tag="h4">
        <a>create post with firebase</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PageHome",
  computed: {
    ...mapGetters("fpost", ["posts"]),
  },
  methods: {
    ...mapActions("fpost", ["getPosts"]),
  },
  created() {
    this.getPosts();
  },
};
</script>

<style lang="scss" scoped></style>
