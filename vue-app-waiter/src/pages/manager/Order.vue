<template>
    <div id="login">
        <van-tabs animated color="#9ebdf7">
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
        <van-tab title="未接订单" >
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
        </van-tab>
        <van-tab title="已接订单" >
            <van-panel :title="b.customer.realname" :status="b.status" use-footer-slot v-for="b in orderStatusFilter('待服务')" :key="b.id">
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
            <div slot="footer" style="text-align:right">
            <van-button size="small" type="primary" plain @click="acceptHandler(b.id)">已服务</van-button> 
            </div>
        </van-panel>
        </van-tab>
        <van-tab title="未确认" >
            <van-panel :title="b.customer.realname" :status="b.status" use-footer-slot v-for="b in orderStatusFilter('待确认')" :key="b.id">
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
        <van-tab title="完成订单" >
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
