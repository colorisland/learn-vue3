import { createRouter, createWebHistory } from "vue-router";
import CircleSlideView from "@/views/CircleSlideView.vue";
import BroadcastView from "@/views/BroadcastView.vue";

let routes = [
  {
    path: "/",
    name: "CircleSlide",
    component: CircleSlideView,
  },
  {
    path: "/broadcast",
    name: "BroadcastView",
    component: BroadcastView,
  },
];

let router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
