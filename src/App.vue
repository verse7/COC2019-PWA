<template>
  <div id="app" class="bg-gray-200">
    <Navbar v-if="$route.name !== 'camera'"/>
    <CameraFab v-if="$route.name !== 'camera'" class="fixed bottom-0 right-0 mr-3 mb-3"/>
    <router-view />
  </div>
</template>

<style>

</style>

<script>
import Navbar from '@/components/Navbar.vue';
import CameraFab from '@/components/CameraFab.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    CameraFab
  }
}
</script>
