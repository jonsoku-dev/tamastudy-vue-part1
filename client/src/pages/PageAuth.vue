<template>
  <div>
    <router-link v-if="!isAuthenticated" :to="{ name: 'page-login' }"
      >Login |</router-link
    >

    <router-link v-if="!isAuthenticated" :to="{ name: 'page-register' }"
      >Register</router-link
    >
    <a v-if="isAuthenticated" href="#" @click="clearAuth">Logout</a>
    <keep-alive>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PageAuth",
  computed: {
    ...mapGetters("authModule", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("authModule", ["clearAuth"]),
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
