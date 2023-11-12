import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetailsView from "../views/EventDetailsView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/event/:id",
    name: "event-details",
    props: true,
    component: EventDetailsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
