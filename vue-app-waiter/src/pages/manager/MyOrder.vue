<template>
    <div class="safe">
        <!-- 标题栏 -->
        <van-nav-bar
            title="我的订单"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-tab title="所有订单" >
            <van-panel :title="a.customer.realname" :status="a.status" use-footer-slot v-for="a in orders" :key="a.id">
            <van-row >
            <van-col span="4" style="text-align:center;"><van-icon name="gold-coin" style=" line-height:22px;" /></van-col>
            <van-col span="14" style="font-size:13px; line-height:22px;">金额 : {{a.total}}</van-col>
            </van-row>
            <van-row >
            <van-col span="4" style="text-align:center;"><van-icon name="underway" style=" line-height:22px;" /></van-col>
            <van-col span="14" style="font-size:13px; line-height:22px;">下单时间 : {{a.time}}</van-col>
            </van-row>
            <van-row >
            <van-col span="4" style="text-align:center;"><van-icon name="more" style=" line-height:22px;" /></van-col>
            <van-col span="14" style="font-size:13px; line-height:22px;">服务内容 : {{a.remark}}</van-col>
            </van-row>
            <van-row >
            <van-col span="4" style="text-align:center;"><van-icon name="location" style=" line-height:22px;" /></van-col>
            <van-col span="14" style="font-size:13px; line-height:22px;" class="van-col--18">地址 : {{a.address.province}}{{a.address.city}}{{a.address.area}}{{a.address.address}}</van-col>
            </van-row>
        </van-panel>
        </van-tab>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    import Vue from 'vue';
    import { NavBar } from 'vant';

    Vue.use(NavBar);

    export default {
        created(){
            this.findAllOrders();
        },
        computed:{
            ...mapState("user",["userinfo"]),
            ...mapState("order",["orders"]),

        },
        methods:{
            ...mapActions("order",["findAllOrders"]),
             onClickLeft() {
                this.$router.push({path:'/order'})
            },
        }
    }
</script>