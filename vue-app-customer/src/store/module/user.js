import {get,post_json,post} from '../../http/axios'
import {setToken,getToken,removeToken,setInfoId,getInfoId,removeInfoId,setInfoName,getInfoName,removeInfoName} from '../../utils/auth'
export default {
	namespaced:true,
	state:{
		//用户信息
		//git
		info:{},
		infoId:getInfoId(),
		infoName:getInfoName(),
		addresses:[],
		currentAddress:{},
		token:getToken(),
	},
	getters:{

	},
	mutations:{
		refreshInfo(state,info){
			state.info = info;
		},
		refreshInfoId(state,infoId){
			state.infoId = infoId;
		},
		refreshInfoName(state,infoName){
			state.infoName = infoName;
		},
		// 更新所有地址
		refreshAddress(state,addresses){
			state.addresses = addresses;
		},
		// 更新默认地址
		refreshCurrentAddress(state,currentAddress){
			state.currentAddress = currentAddress;
		},
		refreshToken(state,token){
			state.token = token;
		},
		refreshEditAddress(state,editAddress){
			state.editAddress = editAddress;
		}
	},
	actions:{
		//登录
		async login(context,payload){
			//1.登录
			let response = await post_json("/user/login",payload);
			let token = response.data.token;
			//2.将token缓存起来？ cookie、sessionStorage、localStorage
			setToken(token);			
			// 3.将token维护到状态机中
			context.commit("refreshToken",token);
			// await context.dispatch("info",token);
		},
		//通过token获取info
		async info(context,token){
			// 1.通过token获取用户信息
			let response = await get("user/info",{token});
			let info = response.data;
			// 2.将info缓存起来  localStorage
			setInfoId(info.id);
			setInfoName(info.name)
			//将用户信息设置到info中
			context.commit("refreshInfo",info);
			context.commit("refreshInfoId",info.id);
			context.commit("refreshInfoName",info.name);
		},
		//退出
		async logout(context){
			//1.请求后台退出
			await post("/user/logout");
			//2.清理本地缓存
			removeToken();
			removeInfoId();
			removeInfoName();
			//3.清理store
			context.commit('refreshToken','');
			context.commit('refreshInfo',{});
			context.commit('refreshInfoId','');
			context.commit('refreshInfoName','');
		},
		// 通过顾客id查询地址
		async findByCustomerId(context,id){
			await get("/address/findByCustomerId?id="+id)
			.then((response)=>{
				// context.commit("refreshResult",response.data);
				// 由于后台返回的数据与插件要求的数据格式不同，所以这里要转换一下
				let addresses = [];
				response.data.forEach((item)=>{
					let address = {
						id:item.id,
						name:context.state.infoName,
						tel:item.telephone,
						address:item.province+""+item.city+""+item.area+""+item.address
					};
					addresses.push(address);
				});
				// 设置所有地址
				context.commit("refreshAddress",addresses);
				// 设置默认地址
				context.commit("refreshCurrentAddress",addresses[0]);
				return response;
			})			
		},
		// 查询所有地址
		async findAllAddress(context){
			let response = await get("/address/findAll");
			return response;
		},
		// 删除地址
		async deleteAddressById(context,id){
			let response = await get("/address/deleteById",{id});
			return response;
		},
		// 添加地址
		async SaveAddress({commit},params){
			let response = await post("/address/saveOrUpdate",params);
			return response;
		}
	}
}