<template>
    <div id="home">
        <van-row>
        <img style="width:100%;" src="../../assets/image/sea.png" alt="">
        </van-row>
        <van-panel :title="o.customer.realname" :status="o.status" use-footer-slot v-for="o in orderStatusFilter('待接单')" :key="o.id">
            <van-row >
            <van-col span="4" style="text-align:center;"><van-icon name="gold-coin" style=" line-height:22px;" /></van-col>
            <van-col span="14" style="font-size:13px; line-height:22px;">金额 : {{o.total}}</van-col>
            </van-row>
            <van-row >
            <van-col span="4" style="text-align:center;"><van-icon name="underway" style=" line-height:22px;" /></van-col>
            <van-col span="14" style="font-size:13px; line-height:22px;" class="van-col--18">下单时间 : {{o.time}}</van-col>
            </van-row>
            <van-row >
            <van-col span="4" style="text-align:center;"><van-icon name="more" style=" line-height:22px;" /></van-col>
            <van-col span="14" style="font-size:13px; line-height:22px;">服务内容 : {{o.remark}}</van-col>
            </van-row>
            <van-row >
            <van-col span="4" style="text-align:center;"><van-icon name="location" style=" line-height:22px;" /></van-col>
            <van-col span="14" style="font-size:13px; line-height:22px;" class="van-col--18">地址 : {{o.address.province}}{{o.address.city}}{{o.address.area}}{{o.address.address}}</van-col>
            </van-row>
            <div slot="footer" style="text-align:right">
            <van-button size="small" type="warning" plain @click="rejectHandler(o.id)">拒绝</van-button>&nbsp;
            <van-button size="small" type="primary" plain @click="acceptHandler(o.id)">接受</van-button> 
            </div>
        </van-panel>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations,mapActions} from "vuex"
export default{
    data(){
        return{
            
        }
    },
    created(){
        this.findAllOrders();
    },
    computed:{
        ...mapState("home",["orders","takeuser"]),
        ...mapState("user",["userinfo"]),
        ...mapGetters("home",["orderStatusFilter"])
    },
    methods:{
        // ...mapMutations("home",["refershOrders"]),
        ...mapActions("home",["findAllOrders","takeOrder","rejectOrder"]),
        acceptHandler(orderId){
            this.takeOrder(orderId)
            // console.log(orderId)
            .then((response)=>{
                this.$toast(response.statusText);
            })
        },
        rejectHandler(orderId){
            this.rejectOrder(orderId)
            // console.log(orderId)
            .then((response)=>{
                this.$toast(response.statusText);
            })
        }
    }
}

</script>
<style scoped>
    #home{
        padding-bottom: 100px;
    }
</style>



