<template>
  <div>
    <div>123213321</div>
    {{value}}
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>