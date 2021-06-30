import { io } from "socket.io-client";
export default {
  install(Vue, connectionString) {
    Vue.prototype.$io = io(connectionString);
  },
};
