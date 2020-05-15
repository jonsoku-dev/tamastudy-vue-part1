<template>
  <div>
    <button
      v-on="$listeners"
      v-bind="$attrs"
      class="button"
      :class="buttonClass"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "BaseButton",
  props: {
    buttonClass: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
}
</style>
