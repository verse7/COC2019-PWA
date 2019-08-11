<template>
  <div id="app" class="bg-gray-200">
    <Navbar v-if="$route.name !== 'camera'"/>
    <CameraFab v-if="$route.name !== 'camera'" class="fixed bottom-0 right-0 mr-3 mb-3"/>
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>
import Navbar from '@/components/Navbar.vue';
import CameraFab from '@/components/CameraFab.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    CameraFab
  },
  mounted() {
    this.$socket.on('connect', () => {
      console.log('connected to server');
    });
  }
}
</script>
