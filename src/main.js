import Vue from 'vue'
import App from './App.vue'
import router from './router/routes.js'
require("./mock/mock");
import animate from 'animate.css'
Vue.use(animate);
import 'mint-ui/lib/style.css'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
