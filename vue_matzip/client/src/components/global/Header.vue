<template>
  <header class="header">
    <div class="header__wrapper container">
      <router-link :to="{ name: 'page-home' }" tag="div">
        <span class="header__logo">LOGO</span>
      </router-link>
      <ul class="header__list" v-if="!isLoggedIn">
        <router-link class="header__item" :to="{ name: 'page-login' }" tag="li">
          <a class="header__link">login</a>
        </router-link>
        <router-link
          class="header__item"
          :to="{ name: 'page-register' }"
          tag="li"
        >
          <a class="header__link">register</a>
        </router-link>
      </ul>
      <ul class="header__list" v-else>
        <li class="header__item">
          <img
            class="header__user header__user--avatar"
            :src="getUser && getUser.avatar"
            alt=""
          />
          <span class="header__user header__user--username"
            >{{ getUser && getUser.username }} 님 환영합니다.</span
          >
        </li>
        <router-link class="header__item" :to="{ name: 'page-posts' }" tag="li">
          <a class="header__link">post</a>
        </router-link>
        <router-link
          class="header__item"
          :to="{ name: 'page-dashboard' }"
          tag="li"
        >
          <a class="header__link">dashboard</a>
        </router-link>
        <li class="header__item">
          <a class="header__link" @click="logout">Logout</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["isLoggedIn", "getUser"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: bisque;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    font: {
      size: 20px;
      weight: 800;
    }
  }
  &__list {
    display: flex;
  }
  &__item {
    margin-left: 8px;
    padding: 8px;
    display: flex;
    align-self: center;
  }
  &__link {
    text-transform: uppercase;
  }
  &__user {
    &--avatar {
      border-radius: 50%;
      overflow: hidden;
      margin-right: 8px;
    }
    &--username {
      align-self: center;
    }
  }
}
</style>
