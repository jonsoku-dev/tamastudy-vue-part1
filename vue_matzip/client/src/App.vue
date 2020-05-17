<template>
  <div>
    <Header />
    <Navigation />
    <div class="container">
      <router-view />
    </div>
    <NotificationContainer />
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Navigation from "@/components/global/Navigation";
import NotificationContainer from "@/components/global/NotificationContainer.vue";

export default {
  name: "App",
  components: {
    Header,
    Navigation,
    NotificationContainer,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main";
</style>
