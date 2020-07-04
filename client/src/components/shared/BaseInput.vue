<template>
  <fieldset>
    <label v-if="label">{{ label }}</label>
    <input v-bind="$attrs" :value="value" @input="onChange" />
  </fieldset>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
  name: "BaseInput",
  methods: {
    onChange($event) {
      this.$emit("handleChange", {
        name: $event.target.name,
        value: $event.target.value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
fieldset {
  border: none;
  margin: 0;
  padding: 0;
}
</style>
