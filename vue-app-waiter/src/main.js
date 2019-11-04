import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
// Vue.component('shuyun-address-item',SafeItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
