import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const AppVue = createApp(App);
AppVue.use(router).use(store).use(ElementPlus).mount("#app");
