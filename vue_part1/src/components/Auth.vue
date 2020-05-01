<template>
  <div>
    <div v-if="!isLoggedIn" class="login_wrapper">
      <p>Please login to continue</p>
      <form>
        <div>
          <label for="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            :value="email"
            @input="email = $event.target.value"
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            :value="password"
            @input="password = $event.target.value"
          />
        </div>
        <button type="submit" class="btn_green" @click.prevent="logInFn">login</button>
      </form>
    </div>
    <div>
      <button @click="logOut">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['logIn', 'logOut']),
    logInFn() {
      const user = { email: this.email, password: this.password };
      this.logIn(user);
    },
  },
  computed: {
    ...mapGetters(['userStatus']),
    isLoggedIn() {
      return this.userStatus.isLoggedIn;
    },
  },
};
</script>
