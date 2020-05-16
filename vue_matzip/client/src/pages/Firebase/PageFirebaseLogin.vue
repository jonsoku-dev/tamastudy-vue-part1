<template>
  <div class="auth">
    <div class="auth__wrapper container">
      <h1>FirebaseLogin</h1>
      <firebase-login-form />
    </div>
  </div>
</template>

<script>
import FirebaseLoginForm from '../components/auth/FirebaseLoginForm'
    export default {
        name: 'PageFirebaseLogin',
        components: {
          FirebaseLoginForm
        }
    }
</script>

<style lang="scss" scoped>
</style>