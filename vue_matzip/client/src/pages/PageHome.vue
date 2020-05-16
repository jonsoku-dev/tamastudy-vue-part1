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
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHome",
};
</script>

<style lang="scss" scoped></style>
