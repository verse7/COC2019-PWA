<template>
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-8">
  <img class="w-full" :src="event.image">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{ event.title }}</div>
    <p class="flex content-center text-gray-700 text-base">
      <PinIcon width="32px" height="32px"/> {{ event.location }}
    </p>
  </div>
  <div class="px-6 py-4 flex flex-row justify-between">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      <PeopleIcon width="16px" height="16px" /> {{ this.attendees }} / {{ event.manpower_quota }}
    </span>
    <button class="bg-teal-400 text-gray-800 rounded-full py-2 px-4 hover:bg-teal-600 focus:outline-none focus:shadow-outline" @click="subscribe(event.id)">Sign Me Up</button>
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
  },
  data() {
    return {
      attendees: 0
    }
  },
  created () {
    this.attendees = this.event.attendees.length;
  },
  methods: {
    subscribe(eventId) {
      fetch(`http://localhost:5000/events/${eventId}/subscribe?user=1`, {
        method: 'POST',
        mode: 'cors'
      })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        if (data.code === 21) {
          this.attendees++;
        } else {
          alert('You are already a member');
        }
      })
      .catch(err => {
        console.log('error!: ', err);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
