import {get,post,post_array} from '../../http/axios'
export default {
	namespaced:true,
	state:{
		categories:[],
		products:[]    //当前分类产品
	},
	getters:{
		productCategoryFilter(state){
			return (categoryId)=>{
			  return state.products.filter(item=>item.categoryId === categoryId)
			}
		  }
	},
	mutations:{
		// 更新查询到的栏目数据
		refreshCategories(state,categories){
			state.categories = categories;
		},
		//更新产品
		refreshProducts(state,products){
			state.products = products;
		}
		
	},
	actions:{
		async findAllCategories({commit}){
			// ajax
			const response = await get("/category/findAll");
			commit("refreshCategories",response.data);
		},
		async queryProduct({commit},payload){
			const response = await post("/product/query",payload);
			//为每个产品添加一个number属性(购物车的维护)
			response.data.list.forEach(item=>{
				item.number = 0;
			})
			commit('refreshProducts',response.data.list);
		}

	}
}