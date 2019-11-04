import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import order from './modules/order'
import home from './modules/home'
import mymoney from './modules/mymoney'


export default new Vuex.Store({
  modules:{
    order,
    user,
    home,
    mymoney
  }
})
