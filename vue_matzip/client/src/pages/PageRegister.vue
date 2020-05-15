<template>
  <div class="auth">
    <div class="auth__wrapper container">
      <h1>Register</h1>
      <register-form />
    </div>
  </div>
</template>

<script>
import RegisterForm from "../components/auth/RegisterForm";

export default {
  name: "PageRegister",
  components: {
    RegisterForm,
  },
};
</script>

<style lang="scss" scoped>
.auth {
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
