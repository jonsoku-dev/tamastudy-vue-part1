<template>
  <div>
    <h2>PagePosts</h2>
    <section>
      <post-card v-for="post in posts" :key="post.id" :post="post" />
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
