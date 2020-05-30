<template>
  <div>
    <router-link :to="{ name: 'page-all-posts' }">All</router-link> |
    <router-link :to="{ name: 'page-create-post' }">Create</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "PagePost",
};
</script>

<style lang="scss" scoped></style>
