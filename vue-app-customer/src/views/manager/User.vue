<template>
    <div class="user">
    	<div class="top">
    		<van-image round="true" width="8rem" height="8rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
    		<div class="username">{{infoName}}</div>
    	</div>
    	<!-- {{infoName}} 
    	{{addresses}} -->
    	<!-- <div class="content">
    		<div class="address">
	    		<a href="" @click.prevent="toAddressListHandler">常用地址</a>
	    		<van-icon name="arrow" @click="toAddressListHandler"/>
	    	</div>
	        <div class="exit">
	        	<a href="" @click.prevent="loyoutHandler">退出</a>
	        	<van-icon name="arrow" @click="loyoutHandler"/>
	        </div>
    	</div> -->
    	<div class="content">
    		<van-cell is-link @click="toAddressListHandler">常用地址</van-cell>
    		<van-cell is-link @click="toAddressListHandler">账户与安全</van-cell>
    		<van-cell is-link @click="toAddressListHandler">地区设置</van-cell>
    		<van-cell is-link @click="toAddressListHandler">隐私</van-cell>
    		<van-cell is-link @click="toAddressListHandler">通用</van-cell>
    		<van-cell is-link @click="toAddressListHandler">问题反馈</van-cell>
			<van-cell is-link @click="loyoutHandler">退出登录</van-cell>
    	</div>
		
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import { Dialog } from 'vant'
export default {
	data(){
		return {
			
		}
	},
	computed:{
		...mapState("user",["info","infoId","infoName","addresses"])
	},
	created(){
		this.findByCustomerId(this.infoId);
	},
	methods:{
		...mapActions("user",["findByCustomerId","logout"]),
		// 退出
		loyoutHandler(){
			Dialog.confirm({
			  	message: '您确认退出当前账户吗'
			}).then(() => {
				this.logout()
				.then(()=>{
					this.$router.push({path:'/login'});
				})
			}).catch(() => {
			  	// on cancel
			});
		},
		// 查询地址
		toAddressListHandler(){
			this.$router.push({path:'/manager/address'});
		} 
	}
}
</script>
<style scoped>
	/*顶端*/
	.user > .top {
		margin-top: 40px;
		text-align: center;
	}
	.user > .top .username {
		font-size: 20px;
	}
	.user > .content{
		background-color: #fdfafa;
		padding: 0.5em 0;
		position: absolute;
		width: 100%;
		margin-top: 30px;
	}
	/*.user > .content > .address{
		position: relative;
		line-height: 50px;
		top:0px;
		width: 94%;
		font-size: 16px;
		background-color: #d3eeb9;
		border-radius: 5px;
		margin:0 auto;
	}
	.user > .content > .exit{
		position: relative;
		background-color: #d3eeb9;
		width: 94%;
		font-size: 16px;
		line-height: 50px;
		top:10px;
		border-radius: 5px;
		margin:0 auto;
	}
	.user > .content a{
		position: relative;
		left: 30px;
	}
	.user > .content .van-icon{
		position: relative !important;
	/*	left:380px;*/
	/*
		left: 400px !important;
		top: 2px !important;
	}*/
	.van-cell{
		font-size: 18px !important;
		line-height: 30px !important;
		margin-bottom: 5px;
	}
</style>