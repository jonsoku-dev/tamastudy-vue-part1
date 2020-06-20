<template>
  <div class="container">
    <Gmap />
    <div>
      <form>
        <base-input
          name="title"
          label="title"
          :value="formData.title"
          placeholder="Title을 입력해주세요. "
          @handleChange="handleChange"
        ></base-input>

        <base-input
          name="description"
          label="description"
          :value="formData.description"
          placeholder="Description 입력해주세요. "
          @handleChange="handleChange"
        ></base-input>

        <base-input
          name="website"
          label="website"
          :value="formData.website"
          placeholder="website 입력해주세요. "
          @handleChange="handleChange"
        ></base-input>

        <base-input
          name="phone"
          label="phone"
          :value="formData.phone"
          placeholder="phone 입력해주세요. "
          @handleChange="handleChange"
        ></base-input>

        <base-input
          name="averageLunchCost"
          label="averageLunchCost"
          :value="formData.averageLunchCost"
          placeholder="averageLunchCost 입력해주세요. "
          @handleChange="handleChange"
        ></base-input>

        <base-input
          name="averageDinnerConst"
          label="averageDinnerConst"
          :value="formData.averageDinnerConst"
          placeholder="averageDinnerConst 입력해주세요. "
          @handleChange="handleChange"
        ></base-input>

        <button @click.prevent="handleSubmit">제출</button>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/shared/BaseInput";
import Gmap from "@/components/googleMap/Gmap";

export default {
  name: "PageCreatePost",
  components: {
    BaseInput,
    Gmap,
  },
  data() {
    return {
      formData: {
        title: "",
        description: "",
        website: "",
        phone: "",
        averageLunchCost: "",
        averageDinnerConst: "",
      },
    };
  },
  methods: {
    handleChange({ name, value }) {
      this.formData[name] = value;
    },
    handleSubmit() {
      console.log(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
