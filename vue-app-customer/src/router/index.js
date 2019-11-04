import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// 管理页面
import Manager from '../views/manager/Index'
// 首页
import Home from '../views/manager/Home'
// 订单
import Order from '../views/manager/Order'
// 我的
import User from '../views/manager/User'
// 地址列表页面
import AddressList from '../views/manager/AddressList'
// 添加地址页面
import AddAddress from '../views/manager/AddAddress'
// 商品分类
import Category from '../views/manager/Category'
// 登录页面
import Login from '../views/Login'
import { Toast } from 'vant'
import {getToken} from '../utils/auth'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
    path:'/',
    redirect:'/login'
  },
  {
    path: '/manager',
    name: 'manager',
    component: Manager,
    beforeEnter: (to,from,next) => { //属于路由自己的拦截器
      let token = getToken();
      if(token){
        //查询info
        store.dispatch('user/info',token)
        .then(()=>{
          //当获取完用户信息之后才允许跳转
          next();
        })
      } else{
        Toast("token失效")
        //跳转到登录
        next({path:'/login'})
      }
    },
    children:[{
      path:'home',
      component: Home
    },{
      path:'order', 
      component: Order
    },{
      path:'order_confirm', 
      component: ()=>import("../views/manager/order/ConfirmOrder")
    },{
      path:'user',
      component: User
    },{
      path:'address',
      component: AddressList
    },{
      path:'addaddress',
      component: AddAddress
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
