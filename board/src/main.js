import "bootstrap/dist/css/bootstrap.min.css";
import "vue-good-table-next/dist/vue-good-table-next.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "bootstrap/dist/js/bootstrap.js";
import axios from "axios";

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.mount("#app");
