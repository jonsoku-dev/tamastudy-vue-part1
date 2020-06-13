<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/global/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
.container {
  width: 1000px;
  margin: 0 auto;
  height: inherit;
}
</style>
