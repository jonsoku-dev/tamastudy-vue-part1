<template>
  <div class="auth">
    <div class="auth__wrapper container">
      <h1>Login</h1>
      <login-form />
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/auth/LoginForm";

export default {
  name: "PageLogin",
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
</style>
