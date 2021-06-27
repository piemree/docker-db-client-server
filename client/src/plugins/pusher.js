 import Pusher from 'pusher-js'

  export default {
    install(Vue) {
      Vue.prototype.$pusher = new Pusher('b71778694cc565cf96ab', {
        cluster: 'eu'
      })
    }
  };