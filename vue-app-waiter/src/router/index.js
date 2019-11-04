import Vue from 'vue'
import VueRouter from 'vue-router'

//管理页面
import Manager from '../pages/manager/Layout.vue'
//登陆页面
import Login from '../pages/Login'
// import {getToken} from '../utils/auth'
// 账户与安全界面
import Safe from '../pages/manager/Safe'
// 我的订单界面
import MyOrder from '../pages/manager/MyOrder'
import MyMoney from '../pages/manager/MyMoney'
// import { Store } from 'vuex';
// import { Toast } from 'vant';


Vue.use(VueRouter)



const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path: '/',
    name: 'manager',
    component: Manager,
    // beforeEnter:(to,form,next) => { //属于路由自己的拦截器
    //     let token = getToken();
    //     if(token){
    //       // 查询info
    //       Store.dispatch('user/info',token)
    //       .then(()=>{
    //         // 当获取完用户信息之后才允许跳转
    //         next();
    //       })
    //     } else {
    //       Toast("token失效")
    //       next({path:'/login'})
    //     }
    // },
    children:[{
      path:"home",
      component: () => import('../pages/manager/Home.vue')
    },{
      path:"order", 
      component: () => import('../pages/manager/Order.vue')
    },{
      path:"user",
      component: () => import('../pages/manager/User.vue')
    }]
  },{
    path: '/login',
    name: 'login',
    component: Login,
  },{
    path: '/safe',
    name: 'safe',
    component: Safe,
  },{
    path: '/myorder',
    name: 'myorder',
    component: MyOrder,
  },{
    path: '/mymoney',
    name: 'mymoney',
    component: MyMoney,
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
