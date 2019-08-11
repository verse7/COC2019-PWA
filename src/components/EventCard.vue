<template>
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-8">
  <img class="w-full" :src="event.image">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{ event.title }}</div>
    <p class="flex content-center text-gray-700 text-base">
      <PinIcon width="32px" height="32px"/> {{ event.location }}
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="flex content-center bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">
      <PeopleIcon width="32px" height="32px" /> {{ event.attendees.length }} / {{ event.manpower_quota }}
    </span>
  </div>
</div>
</template>

<script>
import PeopleIcon from 'vue-ionicons/dist/md-people';
import PinIcon from 'vue-ionicons/dist/ios-pin';

export default {
  name: 'EventCard',
  props: ['event'],
  components: {
    PeopleIcon,
    PinIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
