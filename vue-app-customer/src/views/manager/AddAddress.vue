<template>
	<div class="addAddress">
		<full-Layout title="添加地址" @back="backHandler">
		    <van-address-edit
			  	:area-list="areaList"
			  	show-delete
			  	show-set-default
			  	show-search-result	
			  	address-info 
			  	is-saving:true
			  	:address-info="AddressInfo"	
			  	:search-result="searchResult"
			  	area-columns-placeholder="['请选择', '请选择', '请选择']"
			  	@save="onSave"
			  	@delete="onDelete"
			  	@change-detail="onChangeDetail"
			/>
	    </full-Layout>
	    {{AddressInfo}}
	</div>
</template>
<script>
import FullPageLayout from '../../components/FullPageLayout'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import arealist from '../../store/module/arealist'
import { Dialog } from 'vant';
export default{
	data(){
		return {
			areaList:arealist,
      		searchResult: [],
      		// save:false,
      		AddressInfo:{}
		}
	},
	components:{
		'full-Layout':FullPageLayout
	},
	computed:{
		// 映射
		...mapState("user",["info","infoId","infoName"])
	},
	created(){
		// 修改地址
		this.findAllAddress()
		.then((response)=>{
			response.data.forEach((item)=>{
				if(item.customerId===this.infoId && item.id===this.$route.query.id){
					console.log(item.id,item.customerId);
					this.AddressInfo = {
						id:item.id,
						name:this.infoName,
						tel:item.telephone,
						province:item.province,
						city:item.city,
						county:item.area,
						addressDetail:item.address,
						customerId:this.infoId
					}
				}
			});
		})
		
	},
	methods:{
		// 映射
		...mapActions("user",["SaveAddress","findAllAddress","deleteAddressById"]),
		// 返回地址列表界面
		backHandler(){
			this.$router.push({path:'/manager/address'});
		},
		// 保存地址
	 	onSave(content){
	 		this.save = true;
	 		let params = {
	 			province:content.province,
	 			city:content.city,
	 			area:content.county,
	 			address:content.addressDetail,
	 			telephone:content.tel,
	 			customerId:this.infoId,
	 			id:content.id
	 		};
	 		this.SaveAddress(params)
	 		.then((response)=>{
	 			this.save = false;
	 			Dialog.alert({
				  	message: response.statusText
				}).then(() => {
				   	this.$router.push({path:'/manager/address'});
				});				
	 		})
	 	},
	 	// 删除地址
	    onDelete() {
	      	this.deleteAddressById(this.AddressInfo.id)
	      	.then((response)=>{
	      		Dialog.alert({
				  	message: response.statusText
				}).then(() => {
				   	this.$router.push({path:'/manager/address'});
				});
	      	})
	    },
	    onChangeDetail(val) {
	     	// if (val) {
	      //   	this.searchResult = [{
	      //     		name: '黄龙万科中心',
	      //     		address: '杭州市西湖区'
	      //   	}];
	      // 	} else {
	      //   	this.searchResult = [];
	      // 	}
	    }
	}
}
</script>
<style>
	.van-button--danger{
		background-color: #5ec66e !important;
		border: 1px solid #5ec66e !important;
	}
	.van-switch--on{
		background-color: #5ec66e !important;
	}
	/*.van-address-item__name{
		font-size: 16px !important;
	}
	.van-address-item__address{
		font-size: 16px !important;
	}*/
	.van-address-item .van-radio__icon--checked .van-icon{
		background-color: #5ec66e !important;
		border-color: #5ec66e !important;
	}
</style>