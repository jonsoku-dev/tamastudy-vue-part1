<template>
  <div>
    <form>
      <input type="text" v-model="email" />
      <input type="password" v-model="password" />
      <button type="submit" @click.prevent="handleSubmit">로그인</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['logIn']),
    handleSubmit() {
      const loginData = {
        email: this.email,
        password: this.password,
      };
      this.logIn(loginData);
    },
  },
};
</script>
