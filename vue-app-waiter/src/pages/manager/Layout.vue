<template>
    <div id="login">
        <router-view></router-view>
        <!-- token:{{token}}
        info:{{info}} -->
        <van-tabbar v-model="active" @change="tabChangeHandler" >
            <van-tabbar-item name="/home" icon="star-o">首页</van-tabbar-item>
            <van-tabbar-item name="/order" icon="search">订单</van-tabbar-item>
            <van-tabbar-item name="/user" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    import {mapState,mapActions} from 'vuex'

    import Vue from 'vue';
    import { Dialog } from 'vant';

    // 全局注册
    Vue.use(Dialog);
    export default {
        data(){
            return {
                active:0
            }
        },
        created(){
            if(this.token){
                // 查询info
                this.getInfo(this.token);
            } else {

                Dialog.alert({
                    message: '身份信息失效，请重新登录'
                    // this.$toast("token失效，请先登录")
                }).then(() => {
                    // on close
                    this.$router.push({path:'/login'})
                });

                // this.$toast("token失效，请先登录")
                // // 跳转到登录
                // this.$router.push({path:'/login'})
            }
        },
        computed:{
            ...mapState('user',['token','info'])
        },
        methods:{
            ...mapActions('user',{
                'getInfo':'info',

            }),
            tabChangeHandler(path){
                this.$router.push({path})
            }
        }
    }
</script>
