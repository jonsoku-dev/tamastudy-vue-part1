<template>
  <div>
    <h1>PagePost</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sequi
      veniam perferendis, mollitia nisi aliquam suscipit beatae ad eius minima
      necessitatibus distinctio, reiciendis fugit deserunt fugiat. Perspiciatis
      unde sequi quas.
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PagePost",
  methods: {
    ...mapActions("postState", ["fetchPost"]),
  },
  created() {
    const postId = this.$route.params.postId;
    this.fetchPost(postId);
  },
};
</script>

<style lang="scss" scoped></style>
