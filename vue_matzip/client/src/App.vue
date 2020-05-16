<template>
  <div>
    <Header />
    <Navigation />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/global/Header";
import Navigation from "./components/global/Navigation";

export default {
  name: "App",
  components: {
    Header,
    Navigation,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main";
</style>
