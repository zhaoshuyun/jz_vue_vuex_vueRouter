import {get} from '../../http/axios'
import moment from 'moment'
export default{
    namespaced:true,
    state:{
        orders:[],
    },
    getters:{
        orderStatusFilter(state){
          return (status)=>{
            return state.orders.filter(item=>item.status === status)
          }
        }
      },
    mutations:{
        refershOrders(state,orders){
            state.orders = orders
        }
    },
    actions:{
        // 查询登录员工的所有订单
        async findAllOrders({commit,rootState}){
            let response = await get("/order/query",{waiterId:rootState.user.userinfo.id})
            response.data.forEach((item,index) => {
                response.data[index].time=moment(item.orderTime).format("YYYY-M-DD , h:mm:ss")
            });
            commit("refershOrders",response.data)
        },
        // 接受派单
        async takeOrder({state,dispatch},orderId){
            let response = await get("/order/takeOrder",{orderId})
            console.log(orderId)
            dispatch("findAllOrders") 
            return response
        },
        // 拒绝接单
        async rejectOrder({dispatch},orderId){
            let response = await get("/order/rejectOrder",{orderId})
            console.log(orderId)
            dispatch("findAllOrders") 
            return response
        },
        // 已服务
        async serviceCompleteOrder({dispatch},orderId){
            let response = await get("/order/serviceCompleteOrder",{orderId})
            console.log(orderId)
            dispatch("findAllOrders") 
            return response
        }
    }
    

}