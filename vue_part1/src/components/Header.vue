<template>
  <div class="container">
    <div class="header__icons">
      <router-link to="/" tag="div" class="header__icon header__icon--home">
        <md-button class="md-icon-button">
          <md-icon>home</md-icon>
        </md-button>
      </router-link>

      <router-link to="/todo" tag="div" class="header__icon header__icon--todo">
        <md-button class="md-icon-button">
          <md-icon>playlist_add_check</md-icon>
        </md-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  &__icons {
    display: flex;
  }
}
</style>
