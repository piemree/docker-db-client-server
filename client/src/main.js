import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import axios from "axios";
import VueAxios from "vue-axios";

import socket from './plugins/socket';
import env from "dotenv";
env.config();
Vue.config.productionTip = false;

const url = process.env.HOST || "http://localhost:3000";

const instance = axios.create({
  baseURL: url,
});

Vue.use(socket,url);

Vue.use(VueAxios, instance);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
