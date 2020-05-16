<template>
  <div>
    <h1>PageFirebaseGetPosts</h1>
    <div
      v-for="post in posts"
      :key="post.slug"
      @click="$router.push(`/fb-post/${post.slug}`)"
    >
      <h3>{{ post.title }}</h3>
      <p>{{ post.desc }}</p>
      <span> {{ post.user }} </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PageFirebaseGetPosts",
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
