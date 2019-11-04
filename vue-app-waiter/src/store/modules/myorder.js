import {get} from '../http/axios'
export default {
  namespaced:true,
  state:{
    orders:[]
  },
  getters:{
    orderStatusFilter(state){
      return (status)=>{
        return state.orders.filter(item=>item.status === status)
      }
    }
  },
  mutations:{
    refreshOrders(state, orders){
      state.orders = orders;
    }
  },
  actions:{
    // 根据指定员工下的订单信息
    async findAllOrders({commit,rootState}){
        let response = await get("/order/query",{waiterId:rootState.user.userinfo.id})
        response.data.forEach((item,index) => {
            response.data[index].time=moment(item.orderTime).format("YYYY-M-DD , h:mm:ss")
        });
        commit("refershOrders",response.data)
    },
  }
}