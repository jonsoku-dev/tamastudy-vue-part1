<template>
  <div class="notification-container">
    <transition-group name="slide-up" tag="div" appear>
      <notification-bar
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
      />
    </transition-group>
  </div>
</template>

<script>
import NotificationBar from "@/components/global/NotificationBar";
import { mapState } from "vuex";

export default {
  components: {
    NotificationBar,
  },
  computed: mapState("notificationState", ["notifications"]),
};
</script>

<style lang="scss" scoped>
.notification-container {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0%);
}
.slide-up-enter {
  transform: translateY(10px); /* start 10px down*/
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.2s ease;
}
</style>
