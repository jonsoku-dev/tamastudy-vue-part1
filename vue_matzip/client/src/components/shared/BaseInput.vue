<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="value" @input="onChange" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    onChange: function (event) {
      this.$emit("input", event.target.name, event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  display: block;
  width: 100%;
  text-transform: uppercase;
}
input {
  width: 100%;
}
</style>
