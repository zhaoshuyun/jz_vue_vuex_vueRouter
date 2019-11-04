import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import home from './module/home'
import order from './module/order'
import user from './module/user'
import arealist from './module/arealist'
import shopcar from './module/shopcar'
import address from './module/address'
export default new Vuex.Store({
  state: {
  	
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home,
    order,
    user,
    arealist,
    shopcar,
    address
  }
})
