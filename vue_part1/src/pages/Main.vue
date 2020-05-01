<template>
  <div>
    <router-link to="/todo" tag="button">Todo</router-link>
    <auth />
  </div>
</template>

<script>
import Auth from '../components/Auth';
export default {
  components: {
    Auth,
  },
};
</script>
