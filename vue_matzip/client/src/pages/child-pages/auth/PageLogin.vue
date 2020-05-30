<template>
  <div>
    <h2>PageLogin</h2>
    <form @submit.prevent="handleSubmit">
      <base-input
        type="email"
        placeholder="이메일을 입력해주세요."
        name="email"
        :value="formData.email"
        @handleChange="handleChange"
      />
      <base-input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        name="password"
        :value="formData.password"
        @handleChange="handleChange"
      />
      <button>LOGIN</button>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/shared/BaseInput";
import { mapActions } from "vuex";

export default {
  name: "PageLogin",
  components: {
    BaseInput,
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
    ...mapActions("authModule", ["login"]),
    handleChange({ name, value }) {
      this.formData[name] = value;
    },
    handleSubmit() {
      this.login(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
