<template>
  <div>
    <h1>PostCard</h1>
    <p>{{ post }}</p>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: Object,
  },
};
</script>

<style lang="scss" scoped></style>
