<template>
  <header class="header">
    <div class="header__wrapper container">
      <div class="header__logo-box">
        <router-link to="/" class="header__link">
          <img
            class="header__logo"
            src="https://appstickers-cdn.appadvice.com/1234830087/825976857/cb6d1324cf1f43c0f6e81f186028ed6a-5.png"
            alt="logo"
          />
        </router-link>
      </div>
      <ul class="header__nav" v-if="isAuthenticated">
        <li class="header__list">
          <router-link to="/auth" class="header__link">
            <div class="header__avatar-box">
              <img class="header__avatar" :src="userData.avatar" alt="avatar" />
            </div>
          </router-link>
        </li>
        <li class="header__list">
          <router-link to="/post/all" class="header__link">
            <div class="header__button header__button--blue">
              <span>Post</span>
            </div>
          </router-link>
        </li>
        <li class="header__list">
          <router-link to="/post/create" class="header__link">
            <div class="header__button header__button--green">
              <span>Create Post</span>
            </div>
          </router-link>
        </li>
        <li class="header__list">
          <div class="header__button header__button--grey" @click="clearAuth">
            <span>Sign Out</span>
          </div>
        </li>
      </ul>

      <ul class="header__nav" v-else>
        <li class="header__list">
          <router-link to="/post/all" class="header__link">
            <div class="header__button header__button--blue">
              <span>Post</span>
            </div>
          </router-link>
        </li>
        <li class="header__list">
          <router-link to="/auth/login" class="header__link">
            <div class="header__button header__button--green">
              <span>LOGIN</span>
            </div>
          </router-link>
        </li>
        <li class="header__list">
          <router-link to="/auth/register" class="header__link">
            <div class="header__button header__button--grey">
              <span>REGISTER</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("authModule", ["userData", "isAuthenticated"]),
  },
  methods: {
    ...mapActions("authModule", ["clearAuth"]),
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo-box {
    width: 100px;
    height: auto;
  }
  &__logo {
    width: 100%;
    height: 100%;
    object-fit: fill;
    vertical-align: top;
  }
  &__nav {
    list-style: none;
    display: flex;
    justify-content: flex-end;
  }
  &__list {
    display: flex;
    align-items: center;
    margin: 0 0.5rem;
  }
  &__link {
    text-decoration: none;
    color: inherit;
  }
  &__avatar-box {
    border-radius: 50%;
    border: 1px solid rgba(186, 186, 186, 0.87);
    box-sizing: border-box;
    padding: 0.1rem;
    overflow: hidden;
    width: 40px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__avatar {
    width: 100%;
    height: 100%;
    object-fit: fill;
    vertical-align: top;
  }
  &__button {
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    color: #ffffff;
    &--blue {
      background-color: #2e6da4;
    }
    &--green {
      background-color: #4cae4c;
    }
    &--grey {
      background-color: #8c8c8c;
      cursor: pointer;
    }
  }
}
</style>
