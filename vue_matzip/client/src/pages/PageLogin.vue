<template>
  <div>
    <h1>PageLogin</h1>
    <form @submit.prevent="onSubmit">
      <fieldset>
        <label>EMAIL</label>
        <input
          type="email"
          placeholder="email을 입력해주세요. "
          :value="formData.email"
          name="email"
          @input="onChange"
        />
      </fieldset>

      <fieldset>
        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="password을 입력해주세요. "
          :value="formData.password"
          name="password"
          @input="onChange"
        />
      </fieldset>

      <button>Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PageLogin",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("authState", ["login"]),
    onChange: function (event) {
      this.formData[event.target.name] = event.target.value;
    },
    onSubmit: function () {
      this.login(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
