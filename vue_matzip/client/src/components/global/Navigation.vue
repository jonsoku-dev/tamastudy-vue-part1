<template>
  <nav class="nav">
    <div class="nav__wrapper container">
      <ul class="nav__list">
        <li class="nav__item nav__item--posts">
          <router-link :to="{ name: 'posts' }">
            POSTS
          </router-link>
        </li>
        <li class="nav__item nav__item--posts">
          <router-link :to="{ name: 'posts' }">
            SAMPLE
          </router-link>
        </li>
        <li class="nav__item nav__item--posts">
          <router-link :to="{ name: 'posts' }">
            SAMPLE
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
.nav {
  &__wrapper {
    padding: $space * 2 0;
    display: flex;
    justify-content: center;
  }
  &__list {
    display: flex;
  }
  &__item {
    margin: 0 $space * 2;
    a {
      font-weight: 700;
    }
  }
}
</style>
