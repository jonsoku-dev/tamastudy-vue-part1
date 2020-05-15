<template>
  <div>
    <form>
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
    {{ error }}
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import BaseInput from '../shared/BaseInput'
import BaseButton from '../shared/BaseButton'

    export default {
        name: "FirebaseRegisterForm",
        components: {
            BaseInput,
            BaseButton
        },
        data() {
            return {
                formData: {
                    email: "",
                    password: ""
                }
            }
        },
        computed: {
          ...mapGetters('auth',["error"])
        },
        methods: {
            ...mapActions('auth',["register"]),
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