<template>
  <header class="header">
    <div class="header__wrapper container">
      <div class="header__logo">
        <router-link :to="{ name: 'home' }" class="header__logo-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png"
            alt="logo"
          />
        </router-link>
      </div>
      <ul class="header__list">
        <li class="header__item header__item--login" v-if="!isLoggedIn">
          <router-link :to="{ name: 'login' }">LOGIN</router-link>
        </li>
        <li class="header__item header__item--register" v-if="!isLoggedIn">
          <router-link :to="{ name: 'register' }">REIGSTER</router-link>
        </li>
        <li class="header__item header__item--user" v-if="isLoggedIn">
          <span>Hi, {{ userName }} </span>
        </li>
        <li class="header__item header__item--logout" v-if="isLoggedIn">
          <a href="#" @click.prevent="logout">LOGOUT</a>
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
    ...mapGetters("authState", ["isLoggedIn", "userName"]),
  },
  methods: {
    ...mapActions("authState", ["logout"]),
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #70a1ff;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $space * 2 0;
  }
  &__logo {
    &-link {
      display: block;
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
  }
  &__list {
    display: flex;
    align-items: center;
  }
  &__item {
    margin-left: $space;
    // link
    a {
      padding: $space / 2 $space;
      border-radius: 8px;
      margin-left: space;
      color: #000000;
      background-color: #ffffff;
      font-size: 8px;
    }
    // user info
    span {
      display: block;
      color: white;
    }
  }
}
</style>
