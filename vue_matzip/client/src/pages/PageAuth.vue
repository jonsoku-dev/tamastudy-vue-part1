<template>
  <div>
    <router-link :to="{ name: 'page-login' }">Login</router-link> |
    <router-link :to="{ name: 'page-register' }">Register</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "PageAuth",
};
</script>

<style lang="scss" scoped></style>
