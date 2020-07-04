<template>
  <div>
    <div v-if="isMapLoading">
      MAP LOADING ...
    </div>
    <div v-else class="gmap">
      {{ location }}
      <md-icon class="gmap__dot">center_focus_weak</md-icon>
      <GmapMap
        ref="mapRef"
        class="gmap__contents"
        :center="center"
        :zoom="14"
        map-type-id="terrain"
        @dragend="handleDragEnd"
      >
      </GmapMap>
    </div>
  </div>
</template>

<script>
import { getAddress } from "@/utils/mapHelpers";

export default {
  computed: {
    isMapLoading() {
      const { lat, lng } = this.location;
      if (lat === 0 && lng === 0) {
        return true;
      } else {
        return false;
      }
    },
    center() {
      const { lat, lng } = this.location;
      return { lat, lng };
    },
  },
  data() {
    return {
      location: {
        address: "",
        lat: 0,
        lng: 0,
      },
    };
  },
  methods: {
    async handleDragEnd() {
      const lat = this.$refs.mapRef.$mapObject.center.lat();
      const lng = this.$refs.mapRef.$mapObject.center.lng();
      this.location = {
        ...this.location,
        lat,
        lng,
      };
      const address = await getAddress({ lat, lng });
      this.location = {
        ...this.location,
        address,
      };
    },
  },
  beforeMount() {
    window.navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      this.location = {
        ...this.location,
        lat,
        lng,
      };
      const address = await getAddress({ lat, lng });
      this.location = {
        ...this.location,
        address,
      };
    });
  },
};
</script>

<style lang="scss" scoped>
.gmap {
  position: relative;
  &__dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  &__contents {
    width: 100%;
    height: 400px;
  }
}
</style>
