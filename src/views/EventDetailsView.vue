<script setup>
import { ref, onMounted, defineProps } from "vue";
import EventService from "@/services/EventService.js";
const props = defineProps({
  id: { required: true },
});
const event = ref(null);
onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <span>{{ event.time }} on {{ event.date }} @ {{ event.location }}</span>
    <p>{{ event.description }}</p>
  </div>
</template>
