<template>
    <div id="user">
        <van-nav-bar fixed :title="'我的'" />
        <!-- {{userinfo}} -->
        {{userinfo.total}}
        <div class="photo">
            <img src="../../assets/image/head.jpg" alt="">
        </div>
        <div style="text-align:center;line-height:2em">{{userinfo.name}}</div>
        <!-- <van-row  @click="moneyHandler">
            <van-cell title="我的收入" size="large"/>
        </van-row> -->
        <!-- <van-row>
            <van-cell title="我的订单" size="large"/>
        </van-row> -->
        <div style="width: 100%;height: 3px;background-color: #efefef;">

        </div>
        <van-row @click="safeHandler">
            <van-cell title="账户与安全" size="large"/>
        </van-row>
        <div style="width: 100%;height: 3px;background-color: #efefef;">

        </div>
        <van-row @click="changeHandler">
            <van-cell title="切换账号" size="large"/>
        </van-row>
        <van-row @click="deleteHandler">
            <van-cell title="注销账号" size="large"/>
        </van-row>
        <div class="bottom" @click="logoutHandler">退出当前账户</div>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    import Vue from 'vue';
    import { Dialog } from 'vant';

    // 全局注册
    Vue.use(Dialog);

    export default {
        computed:{
            ...mapState("user",["userinfo"])
        },
        methods:{
            ...mapActions('user',['logout']),
            logoutHandler(){
                // 退出
                this.logout()

                Dialog.confirm({
                    title: '确认退出登录？',
                }).then(() => {
                    this.$router.push({path:'/login'})
                }).catch(() => {
                    // on cancel
                });
                // .then(()=>{
                //     this.$router.push({path:'/login'})
                // })
            },
            // 切换账号
            changeHandler(){
                Dialog.confirm({
                    title: '确认切换账号?',
                }).then(() => {
                    this.$router.push({path:'/login'})
                }).catch(() => {
                    // on cancel
                });
            },
            // 账户与安全
            safeHandler(){
                this.$router.push({path:'/safe'})
                
            },
            // 账户与安全
            deleteHandler(){
                Dialog.confirm({
                    title: '确认注销账号?',
                }).then(() => {
                    this.$router.push({path:'/login'})
                }).catch(() => {
                    // on cancel
                });
            },
            // 我的订单
            // myOrderHandler(){
            //     this.$router.push({path:'/myorder'})
            // }
            // 收入
            moneyHandler(){
                this.$router.push({path:'/mymoney'})
            }
        }
    }

</script>
<style scoped>
    .photo{
        width: 100px;
        height: 100px;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin: 50px auto;
        margin-bottom: 0;
        position: relative;
        margin-top: 60px;
    }
    .photo>img{
        width: 90%;
        height: 90%;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        right: 5px;
    }
    #name{
        margin-left: 130px;
        font-size: 20px;
    }
    .line {
        line-height: 4em;
        border-bottom: 1px solid #ededed;
        padding-left: 4em;
    }
    .bottom {
        line-height: 3em;
        width: 100%;
        position: absolute;
        bottom: 50px;
        text-align: center;
        border-top: 1px solid #efefef;
        color: red;
    }
</style>