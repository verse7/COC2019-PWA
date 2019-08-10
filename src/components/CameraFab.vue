<template>
<router-link tag="button" to="/camera" class="camera-fab flex content-center justify-center bg-teal-500 hover:bg-teal-700 text-white font-bold rounded-full">
  <CameraIcon class="camera-icon" w="32px" h="32px"/>
</router-link>
</template>

<script>
import CameraIcon from 'vue-ionicons/dist/ios-camera';

export default {
  name: 'camera-fab',
  components: {
    CameraIcon
  }
}
</script>

<style>
.camera-fab {
  min-width: 60px;
  max-width: 60px;
  min-height: 60px;
  max-height: 60px;
}

.camera-icon {
  fill: #fff;
}
</style>