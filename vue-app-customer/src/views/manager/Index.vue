<template>
    <div class="manager">
        <!-- 用于接收管理页面、首页、订单页、我的页面 -->
        <router-view></router-view>
        <div>
            <van-tabbar v-model="active" active-color="#07c160" inactive-color="#383538" @change="tabChangeHandler" >
                <van-tabbar-item name="/manager/home" icon="star-o">首页</van-tabbar-item>
                <van-tabbar-item name="/manager/order" icon="search">订单</van-tabbar-item>
                <van-tabbar-item name="/manager/user" icon="user-o">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            active:0
        }
    },
    created(){
        if(this.token){
            //查询info
            this.getInfo(this.token);
        }else{
            this.$toast("token失效")
            //跳转到登录
            this.$router.push({path:'/login'})
        }
    },
    computed:{
        ...mapState("user",["token","info"])
    },
    methods:{
        ...mapActions("user",{
            'getInfo':'info'
        }),

        tabChangeHandler(path){
            this.$router.push({path})
        }
    }
}
</script>
<!-- <template>
    <div class="login">
        <router-view/>
        <div> -->
            <!-- <router-link to="/home">首页</router-link>
            <router-link to="/order">订单</router-link>
            <router-link to="/user">我的</router-link> -->
           <!--  <van-tabbar v-model="active" @change="tabChangeHandler" >
            <van-tabbar-item name="/home" icon="star-o">首页</van-tabbar-item>
            <van-tabbar-item name="/order" icon="search">订单</van-tabbar-item>
            <van-tabbar-item name="/user" icon="user-o">我的</van-tabbar-item>
            </van-tabbar>
        </div> -->
    <!-- </div>
</template>
<script>
export default {
    data(){
        return {
            active:0
        }
    },
    methods:{
        tabChangeHandler(path){
            this.$router.push({path})
        }
    }
}
</script>
 -->