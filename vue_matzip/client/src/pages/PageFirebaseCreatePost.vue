<template>
  <div>
    <h1>Firebase Create Post</h1>
    <form @submit.prevent="onSubmit">
      <base-input
        label="title"
        :value="formData.title"
        name="title"
        placeholder="title을 입력해주세요."
        type="title"
        @input="onChange"
      />
      <base-input
        label="desc"
        :value="formData.desc"
        name="desc"
        placeholder="desc를 입력해주세요. "
        type="text"
        @input="onChange"
      />
      <base-button type="submit">create post</base-button>
    </form>
  </div>
</template>

<script>
import BaseInput from "../components/shared/BaseInput";
import BaseButton from "../components/shared/BaseButton";
import { mapActions } from "vuex";

export default {
  name: "PageFirebaseCreatePost",
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      formData: {
        title: "",
        desc: "",
      },
    };
  },
  methods: {
    ...mapActions("fpost", ["createPost"]),
    onChange: function (name, value) {
      this.formData[name] = value;
    },
    onSubmit: function () {
      this.createPost(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
