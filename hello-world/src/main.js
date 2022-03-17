import { createApp } from "vue";
import App from "./App.vue";
import prismatic from "@prismatic-io/marketplace";

prismatic.init();

createApp(App).mount("#app");
