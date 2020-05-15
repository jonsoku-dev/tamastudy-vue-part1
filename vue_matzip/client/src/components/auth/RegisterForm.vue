<template>
  <form>
    <base-input
      label="username"
      :value="formData.username"
      name="username"
      placeholder="username을 입력해주세요."
      type="text"
      @input="onChange"
    />
    <base-input
      label="email"
      :value="formData.email"
      name="email"
      placeholder="email을 입력해주세요."
      type="email"
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
    <base-button type="submit" @click.prevent="onSubmit">Register</base-button>
  </form>
</template>

<script>
import {mapActions} from 'vuex'
import BaseInput from '../shared/BaseInput'
import BaseButton from '../shared/BaseButton'

    export default {
        name: "RegisterForm",
        components: {
            BaseInput,
            BaseButton
        },
        data() {
            return {
                formData: {
                    username: "",
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            ...mapActions(["register"]),
            onChange: function(name, value) {
                this.formData[name] = value
            },
            onSubmit: function(){
                this.register(this.formData)
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>