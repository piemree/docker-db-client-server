import Vue from 'vue'
import App from './App.vue'
import pusher from './plugins/pusher';
Vue.config.productionTip = false

Vue.use(pusher)

new Vue({
  render: h => h(App),
}).$mount('#app')
