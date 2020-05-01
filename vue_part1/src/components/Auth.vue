<template>
  <div class="auth container">
    <div class="auth__info" v-if="isLoggedIn">
      <div class="auth__avatar">
        <img :src="hasAvatar ? hasAvatar : 'https://i.dlpng.com/static/png/6728146_preview.png'" alt="avatar" />
      </div>
      <div>{{ currentUser }}님 환영합니다.</div>
      <div><button @click="handleLogout">Logout</button></div>
    </div>
    <div class="auth__login" v-else>
      <login-form />
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    LoginForm,
  },
  computed: {
    ...mapGetters(['userData']),
    isLoggedIn() {
      return this.userData.isLoggedIn;
    },
    hasAvatar() {
      return this.userData.userInfo.photoURL;
    },
    currentUser() {
      return this.userData.userInfo.email;
    },
  },
  methods: {
    ...mapActions(['logOut']),
    handleLogout() {
      this.logOut();
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  justify-content: flex-end;
  &__info {
    display: flex;
    align-items: center;
    > div {
      margin: 0 8px;
    }
  }
  &__avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #e2e2e2;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
}
</style>
