import "@/stylesheets/reset.css";
import "@/stylesheets/main.css";

import { createApp } from "vue";

import App from "@/App.vue";
import { pinia } from "@/stores/pinia";
import router from "@/router";

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
