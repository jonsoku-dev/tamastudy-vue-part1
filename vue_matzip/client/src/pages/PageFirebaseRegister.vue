<template>
  <div class="auth">
    <div class="auth__wrapper container">
      <h1>FirebaseRegister</h1>
      <firebase-register-form />
    </div>
  </div>
</template>

<script>
import FirebaseRegisterForm from '../components/auth/FirebaseRegisterForm'
    export default {
        name: 'PageFirebaseRegister',
        components: {
          FirebaseRegisterForm
        }
    }
</script>

<style lang="scss" scoped>
</style>