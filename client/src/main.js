import Vue from 'vue'
import {
  Navbar
} from 'buefy'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.use(Navbar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
