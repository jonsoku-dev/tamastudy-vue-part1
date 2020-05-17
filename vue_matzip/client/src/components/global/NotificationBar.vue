<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <p>{{ notification.msg }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 2000);
  },
  beforeDestory() {
    clearTimeout(this.timeout);
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`;
    },
  },
  methods: mapActions("notificationState", ["remove"]),
};
</script>

<style lang="scss" scoped>
.notification-bar {
  margin: 1em 0 1em;
  border: 1px solid #eaeaea;
  padding: 16px 24px;
}
</style>
