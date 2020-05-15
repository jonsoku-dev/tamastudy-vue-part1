<template>
  <div>
    <Header />
    <firebase-header />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "./components/global/Header";
import FirebaseHeader from './components/global/FirebaseHeader';

export default {
  name: "App",
  components: {
    Header,
    FirebaseHeader
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
.auth {
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
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
