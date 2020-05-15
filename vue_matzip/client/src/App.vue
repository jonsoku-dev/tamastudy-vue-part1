<template>
  <div>
    <Header />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "./components/global/Header";
export default {
  name: "App",
  components: {
    Header,
  },
  methods: {
    ...mapActions(["getMe"]),
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  created() {
    if (window.sessionStorage.getItem("token")) {
      this.getMe();
    }
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
