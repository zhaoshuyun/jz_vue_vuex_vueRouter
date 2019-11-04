<template>
	<div class="address">		
		<full-Layout title="地址列表" @back="backHandler">
		    <van-address-list
			  v-model="chosenAddressId"
			  :list="addresses"
			  :disabled-list="disabledList"
			  disabled-text="以下地址超出配送范围"
			  @add="onAdd"
			  @edit="onEdit"
			/>
	    </full-Layout>
	    
	</div>	
</template>
<script>
// import FullPageLayout from '../../components/FullPageLayout'
import {mapState,mapActions} from 'vuex'
export default {
	data(){
		return {
			chosenAddressId:0
		}
	},
	components:{
		// 'full-Layout':FullPageLayout,
	},
	computed:{
		...mapState("user",["info","addresses","currentAddress","infoId"])		
	},
	created(){
		this.findByCustomerId(this.infoId);
	},
	methods:{
		...mapActions("user",["findByCustomerId"]),
		// 返回我的界面
		backHandler(){
			this.$router.push({path:'/manager/user'});
		},
		// 新增地址
		onAdd() {
	      	this.$router.push({path:'/manager/addaddress'});
	    },
	    // 修改地址
	    onEdit(addresses, index) {
	    	this.findByCustomerId(this.infoId,this.addresses[index].id);
	    	this.$router.push({
	    		path:'/manager/addaddress',
	    		query:{
	    			id:this.addresses[index].id,
	    			// tel:this.addresses[index].tel,
	    			// province:this.addresses[index].province,
	    			// city:this.addresses[index].city,
	    			// county:this.addresses[index].county,
	    			// addressDetail:this.addresses[index].addressDetail,
	    			// customerId:this.infoId,
	    			// address:this.addresses[index].address
	    		}
	    	});

	    }
	}
}
</script>
<style scoped>
	
</style>