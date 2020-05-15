<template>
  <div>
    <form @submit.prevent="onSubmit">
      <base-input
        label="email"
        :value="formData.email"
        name="email"
        placeholder="email을 입력해주세요."
        type="text"
        @input="onChange"
      />
      <base-input
        label="password"
        :value="formData.password"
        name="password"
        placeholder="password를 입력해주세요. "
        type="current-password"
        @input="onChange"
      />
      <base-button type="submit">Login</base-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BaseInput from "../shared/BaseInput";
import BaseButton from "../shared/BaseButton";

export default {
  name: "RegisterForm",
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions('auth', ["login"]),
    onChange: function (name, value) {
      this.formData[name] = value;
    },
    onSubmit: function () {
      this.login(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
