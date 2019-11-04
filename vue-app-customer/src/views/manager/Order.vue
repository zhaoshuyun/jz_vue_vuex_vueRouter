<template>
    <div class="order">
        <div class="header">
            <van-sticky>
                <div class="title">我的订单</div>
            </van-sticky>
        </div>
        <div class="content">
            <van-tabs v-model="active" :color="'#07c160'">
                <van-tab title="全部订单">
                    <order-item v-for='order in orders' :key="order.id"  :data='order'></order-item>
                </van-tab>
                <van-tab title="未付款">
                    <order-item  v-for='order in ordersStatusFilter("待支付")' :key="order.id"  :data='order'></order-item>
                </van-tab>
                <van-tab title="未服务">
                    <order-item v-for='order in ordersStatusFilter("待派单")' :key="order.id"  :data='order'></order-item>
                    <order-item v-for='order in ordersStatusFilter("待接单")' :key="order.id"  :data='order'></order-item>
                    <order-item v-for='order in ordersStatusFilter("待服务")' :key="order.id"  :data='order'></order-item>
                </van-tab>
                <van-tab title="待确认">
                    <order-item  v-for='order in ordersStatusFilter("待确认")' :key="order.id"  :data='order'></order-item>
                </van-tab>
                <van-tab title="已完成">
                    <order-item v-for='order in ordersStatusFilter("已完成")' :key="order.id"  :data='order'></order-item>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState ,mapGetters} from 'vuex'
export default {
    data(){
        return{
            active: 0
        }
    },
    computed:{
        ...mapState('order',['orders']),
        ...mapGetters('order',['ordersStatusFilter'])
    },
    created(){
        this.findAllOrders();
    },
    methods:{
        ...mapActions('order',['findAllOrders'])
    }
}
</script>
<style scoped>
    .order {
        background: #f1f1f1;
    }
    .content{
        width:100%;
        height: 570px;
        overflow: scroll;
    }
    .title{
        font-size: 16px;
        padding: 1em;
        text-align: center;
        border-bottom: 1px solid #ebedf0;
    }
    
</style>
