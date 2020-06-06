<template>
  <div>{{ getAllPostsLoading ? "true" : "false" }}</div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "PageAllPosts",
  methods: {
    ...mapActions("postModule", ["getAllPosts"]),
  },
  computed: {
    ...mapState("postModule", ["getAllPostsLoading"]),
  },
  mounted() {
    this.getAllPosts();
  },
};
</script>

<style lang="scss" scoped></style>
