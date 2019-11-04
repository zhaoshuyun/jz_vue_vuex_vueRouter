<template>
    <div id="login">
        <van-tabs animated color="#9ebdf7">
        <van-tab title="有收入的订单" >   
            <van-row style="relative">
                <van-col>
                    <van-cell title="账户ID" size="large" icon="filter-o" />
                </van-col>
                <van-col style="position: absolute;line-height:3em;right:20px">{{userinfo.id}}</van-col>
            </van-row>
            <van-row style="relative">
                <van-col>
                    <van-cell title="收入总计" size="large" icon="filter-o" />
                </van-col>
                <van-col style="position: absolute;line-height:3em;right:20px">{{total}}</van-col>
            </van-row>
            <van-panel :title="b.customer.realname" :status="b.status" use-footer-slot v-for="b in orderStatusFilter('已完成')" :key="b.id">
            <van-row >
            <van-col span="4" style="text-align:center;"><van-icon name="gold-coin" style=" line-height:22px;" /></van-col>
            <van-col span="14" style="font-size:13px; line-height:22px;">金额 : {{b.total}}</van-col>
            </van-row>
            <van-row >
            <van-col span="4" style="text-align:center;"><van-icon name="underway" style=" line-height:22px;" /></van-col>
            <van-col span="14" style="font-size:13px; line-height:22px;">下单时间 : {{b.time}}</van-col>
            </van-row>
            <van-row >
            <van-col span="4" style="text-align:center;"><van-icon name="more" style=" line-height:22px;" /></van-col>
            <van-col span="14" style="font-size:13px; line-height:22px;">服务内容 : {{b.remark}}</van-col>
            </van-row>
            <van-row >
            <van-col span="4" style="text-align:center;"><van-icon name="location" style=" line-height:22px;" /></van-col>
            <van-col span="14" style="font-size:13px; line-height:22px;" class="van-col--18">地址 : {{b.address.province}}{{b.address.city}}{{b.address.area}}{{b.address.address}}</van-col>
            </van-row>
        </van-panel>
        </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations,mapActions} from "vuex"
export default {
    data(){
        return{
            
        }
    },
    created(){
        this.findAllOrders();
    },
    computed:{
        ...mapState("home",["orders"]),
        ...mapState("user",["userinfo"]),
        ...mapState("mymoney",["total"]),
        ...mapGetters("home",["orderStatusFilter"])
    },
    methods:{
        ...mapActions("home",["findAllOrders","serviceCompleteOrder"]),
        acceptHandler(orderId){
            this.serviceCompleteOrder(orderId)
            .then((response)=>{
                this.$toast(response.statusText);
            })
        }
    }
}
</script>
<style  scoped>
    #login{
        padding-bottom: 50px;
    }
</style>
