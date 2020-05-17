<template>
  <div>
    <h1>PageRegister</h1>
    <form @submit.prevent="onSubmit">
      <fieldset>
        <label>USER NAME</label>
        <input
          type="text"
          placeholder="username을 입력해주세요. "
          :value="formData.username"
          name="username"
          @input="onChange"
        />
      </fieldset>

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

      <button>Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PageRegister",
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
    ...mapActions("authState", ["register"]),
    onChange: function (event) {
      this.formData[event.target.name] = event.target.value;
    },
    onSubmit: function () {
      this.register(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
