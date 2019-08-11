<template>
  <div class="pt-16 px-4">
    <!-- <h1>Upcoming Events</h1> -->
    <EventCard v-for="event in events" :event=event :key=event.id />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';

export default {
  name: 'home',
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  mounted() {
    fetch('https://zidanewright.ml:5000/events', {
      method: 'GET',
      mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.events = data.data.events
    })
    .catch(err => {
      console.log(err);
    })
  }
}
</script>
