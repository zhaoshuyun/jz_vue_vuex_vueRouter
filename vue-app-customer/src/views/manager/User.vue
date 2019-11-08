<template>
    <div class="user">
    	<div class="top">
    		<van-image round="true" width="8rem" height="8rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
    		<div class="username">{{infoName}}</div>
    	</div>
    	<div class="content">
    		<van-cell is-link @click="toAddressListHandler">常用地址</van-cell>
    		<van-cell is-link @click="safeHandler">账户与安全</van-cell>
    		<van-cell is-link @click="toAddressListHandler">地区设置</van-cell>
    		<van-cell is-link @click="toAddressListHandler">隐私</van-cell>
    		<van-cell is-link @click="normalHandler">通用</van-cell>
    		<van-cell is-link @click="changeHandler">切换账号</van-cell>
    		<!-- <van-cell is-link @click="toAddressListHandler">问题反馈</van-cell> -->
			<!-- <van-cell is-link @click="loyoutHandler">退出登录</van-cell> -->
    	</div>
		<div class="bottom" @click="loyoutHandler">退出当前账户</div>
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
		},
		// 账户与安全
		safeHandler(){
			this.$router.push({path:'/safe'})
			
		},
		// 通用设置
		normalHandler(){
			this.$router.push({path:'/normal'})
		},
		// 切换账号
		changeHandler(){
			Dialog.confirm({
			  	message: '您确认切换账号吗'
			}).then(() => {
				this.logout()
				.then(()=>{
					this.$router.push({path:'/login'});
				})
			}).catch(() => {
			  	// on cancel
			});
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
	/* .content{
		font-size: 18px !important;
	} */
	.van-cell{
		font-size: 15px !important;
		line-height: 25px !important;
		margin-bottom: 5px;
	}
	/* 账户与安全 */
	.bottom {
        line-height: 3em;
		font-size: 15px;
        width: 100%;
        position: absolute;
        bottom: 50px;
        text-align: center;
        border-top: 1px solid #efefef;
        color: red;
    }
</style>