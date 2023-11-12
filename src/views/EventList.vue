<template>
  <h1>Events for good</h1>
  <div class="events">
    <EventCard v-for="event in events" :event="event" :key="event.id" />
  </div>
</template>

<script setup>
import EventService from "@/services/EventService.js";
import EventCard from "@/components/EventCard.vue";
import { ref, onMounted } from "vue";
// export default {
//   name: "HomeView",
//   components: {},
// };
const events = ref(null);
onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>
