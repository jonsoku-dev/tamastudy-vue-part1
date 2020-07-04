<template>
  <div>
    <h2>PageRegister</h2>
    <form @submit.prevent="handleSubmit">
      <base-input
        placeholder="유저 네임을 입력해주세요."
        name="username"
        :value="formData.username"
        @handleChange="handleChange"
      />
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
      <button>REGISTER</button>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/shared/BaseInput";
import { mapActions } from "vuex";

export default {
  name: "PageRegister",
  components: {
    BaseInput,
  },
  data() {
    return {
      formData: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("authModule", ["register"]),
    handleChange({ name, value }) {
      this.formData[name] = value;
    },
    handleSubmit() {
      this.register(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
