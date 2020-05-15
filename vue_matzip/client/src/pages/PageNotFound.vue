<template>
  <div class="container">
    PageNotFound
    <router-link :to="{ name: 'page-home' }">
      Go to Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style lang="scss" scoped></style>
