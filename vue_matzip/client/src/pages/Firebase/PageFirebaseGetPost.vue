<template>
  <div>
    <h1>PageFirebaseGetPost</h1>
    <div>
      <h3>{{ post && post.title }}</h3>
      <p>{{ post && post.desc }}</p>
      <span>{{ post && post.user }}</span>
    </div>
    <div>
      <button>update</button
      ><button @click="deletePost(post && post.id)">delete</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PageFirebaseGetPost",
  computed: {
    ...mapGetters("fpost", ["post"]),
  },
  methods: {
    ...mapActions("fpost", ["getPost", "deletePost"]),
  },
  created() {
    this.getPost(this.$route.params.post_slug);
  },
};
</script>

<style lang="scss" scoped></style>
