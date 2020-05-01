<template>
  <div id="app">
    <Auth />
    <Header />
    <router-view />
    <div>Footer</div>
  </div>
</template>

<script>
import Auth from './components/Auth';
import Header from './components/Header';
export default {
  name: 'App',
  components: {
    Auth,
    Header,
  },
};
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
