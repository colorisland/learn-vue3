import { createRouter, createWebHistory } from "vue-router";
import CircleSlideView from "@/views/CircleSlideView.vue";
import AboutView from "@/views/AboutView.vue";

let routes = [
  {
    path: "/",
    name: "CircleSlide",
    component: CircleSlideView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

let router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
