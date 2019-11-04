
export default {
    namespaced:true,
    state: {
        userinfo:{}     //用户信息
    },
    mutations: {
        refreshInfo(state,userinfo){
            state.userinfo = userinfo;
        }
        
    },
    actions: {
        // 通过token获取info
        async info(context){
            // 将用户信息设置到info中
            context.commit("refreshInfo",response.data)
        }
    }
}