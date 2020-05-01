<template>
  <div class="auth container">
    <div class="auth__info" v-if="isLoggedIn">
      <div class="auth__user auth__user--avatar">
        <img
          :src="
            hasAvatar
              ? hasAvatar
              : 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png'
          "
          alt="avatar"
        />
      </div>
      <div class="auth__user auth__user--email">
        <strong>{{ currentUser }}</strong> 님 환영합니다.
      </div>
      <div class="auth__logout"><button class="auth__logout-btn" @click="handleLogout">Logout</button></div>
    </div>
    <div v-else>
      <div v-if="!showLoginForm && !showRegisterForm">
        <md-button class="md-icon-button" @click="onClickLogin">
          <md-icon>vpn_key</md-icon>
        </md-button>
        <md-button class="md-icon-button" @click="onClickRegister">
          <md-icon>how_to_reg</md-icon>
        </md-button>
      </div>
      <div v-if="showLoginForm" class="auth__login">
        <login-form :onClickReturnFormStatus="onClickReturnFormStatus" />
      </div>
      <div v-if="showRegisterForm" class="auth__register">
        <register-form :onClickReturnFormStatus="onClickReturnFormStatus" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default {
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      showLoginForm: false,
      showRegisterForm: false,
    };
  },
  computed: {
    ...mapGetters(['userData']),
    isLoggedIn() {
      return this.userData.isLoggedIn;
    },
    hasAvatar() {
      console.log(this.userData.userInfo.photoURL);
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
    onClickLogin() {
      this.showRegisterForm = false;
      this.showLoginForm = true;
    },
    onClickRegister() {
      this.showLoginForm = false;
      this.showRegisterForm = true;
    },
    onClickReturnFormStatus() {
      this.showLoginForm = false;
      this.showRegisterForm = false;
    },
  },
};
</script>
