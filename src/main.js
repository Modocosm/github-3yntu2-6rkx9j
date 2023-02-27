import "./stylesheet/main.css";
// import "./stylesheet/.main.old.css";
import { createApp } from "vue";
// import "modern-normalize";
import App from "./App.vue";
import router from "./router";
// import "modern-normalize";
// import "./stylesheet/main.css";

const app = createApp(App);
app.use(router);
app.mount("#app");

