import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import axios from "axios";
import VueAxios from "vue-axios";
import { io } from "socket.io-client";
import env from "dotenv";
env.config();
Vue.config.productionTip = false;

const url = process.env.HOST || "http://localhost:3000";
console.log(url)
const instance = axios.create({
  baseURL: url,
});

io(url);

Vue.use(VueAxios, instance);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
