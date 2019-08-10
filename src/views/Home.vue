<template>
  <div class="pt-16 px-4">
    <!-- <h1>Upcoming Events</h1> -->
    <EventCard />
    <EventCard />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';

export default {
  name: 'home',
  components: {
    EventCard
  }
}
</script>
