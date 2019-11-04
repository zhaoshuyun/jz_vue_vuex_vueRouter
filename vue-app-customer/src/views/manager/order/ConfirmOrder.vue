<template>
        <div class="order_confirm">
            <div class="header">
                <van-nav-bar
                    title="订单确认"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
                />
            </div>
            <div class="address">
                <!-- 服务地址 -->
                 <van-row class="line">
                     <van-col :span="6" class="line-left">
                        <van-icon name="location" />
                     </van-col>
                     <van-col :span="18" class="line-right">
                        <div class="label">服务地址</div>
                        <div>
                            <van-row>
                                <van-col :span="6">{{info.name}}</van-col>
                                <van-col :span="4">{{addresses[0].telephone}}</van-col>
                            </van-row>
                            <van-cell is-link @click="showPopup" style="font-size:12px">
                                {{addresses[0].province}}&nbsp;{{addresses[0].city}}&nbsp;{{addresses[0].area}}&nbsp;{{addresses[0].address}}
                            </van-cell>
                            
                            <van-popup v-model="show" closeable position="bottom" :style="{ height: '60%' }">
                            <van-radio-group v-model="radio" style="margin-top:50px">
                                <van-cell-group v-for="a in addresses" :key="a.id" :data="a">
                                    <van-cell  clickable @click="radio = a.id">
                                        {{a.province}}&nbsp;{{a.city}}&nbsp;{{a.area}}&nbsp;{{a.address}}
                                    <van-radio slot="right-icon" checked-color="#07c160" :name="a.id"/>
                                    </van-cell>
                                </van-cell-group>
                            </van-radio-group>
                            <div class="show_footer" style="position:fixed;bottom:0;width:100%;z-index:200">
                                <van-button type="primary" size="large" @click="closeShow(a)">确认</van-button>
                            </div> 
                        </van-popup>
                    </div>
                </van-col>
            </van-row>
        </div>
            <div class="content">
                 <!-- 订单详情 -->
                 <van-row class="line">
                     <van-col :span="6" class="line-left">
                        <van-icon name="balance-list" />
                     </van-col>
                     <van-col :span="18" class="line-right">
                        <div class="label">订单详情</div>
                        <div>
                            <van-row v-for="line of orderLines.values()" :key="line.productId">
                                <van-col :span="8">{{line.productName}}</van-col>
                                <van-col :span="4">￥{{line.price}}</van-col>
                                <van-col :span="4">x{{line.number}}</van-col>
                                <van-col :span="8">￥{{line.number*line.price}}</van-col>
                            </van-row>
                                
                            <van-row style="border-top:1px dotted #ededed">
                                <van-col :span="16"></van-col>
                                <van-col :span="8">￥{{total}}</van-col>
                            </van-row>
                        </div>
                     </van-col>
                 </van-row>
                 <!-- 服务时间 -->
                 <van-row class="line">
                     <van-col :span="6" class="line-left">
                        <van-icon name="clock" />
                     </van-col>
                     <van-col :span="18" class="line-right">
                        <div class="label">服务时间</div>
                        <div>{{date | datefmt}}</div>
                     </van-col>
                 </van-row>
                 <!-- 支付方式 -->
                 <van-row class="line">
                     <van-col :span="6" class="line-left">
                         <van-icon name="gold-coin" />
                     </van-col>
                     <van-col :span="18" class="line-right">
                        <div class="label">支付方式</div>
                        <div>第三方平台（支付宝）</div>
                     </van-col>
                 </van-row>
            </div>
            <!-- 按钮 -->
            <div class="footer" style="position:fixed;bottom:0;width:100%;z-index:200">
                <van-button type="primary" size="large"  @click="confirmOrderHandler">确认订单</van-button>
            </div>
        </div>
    
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    data(){
        return{
            show: false,
            radio: '1',
            date: new Date()
        }
    },
    created(){
        //查询所有地址
        this.findAllAddresses();
    },
    mounted() {
        let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
        this.timer = setInterval(() => {
        _this.date = new Date(); // 修改数据date
        }, 1000)
    },
    beforeDestroy() {
        if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
        }
    },
    computed:{
        ...mapState("shopcar",["orderLines"]),
        ...mapState("user",["info"]),
        ...mapState("address",["addresses"]),
        ...mapGetters("shopcar",["total"])
    },
    methods:{
        ...mapActions("address",["findAllAddresses"]),
        ...mapActions("order",["saveOrder"]),
        onClickLeft() {
            this.$router.back();
        },
        showPopup() {
            this.show = true;
        },
        closeShow(){
            this.show = false;
            console.log(a)
        },
        //确认订单，保存订单
        confirmOrderHandler(){
            this.saveOrder()
            .then((response)=>{
                this.$notify({ 
                    type: 'success', 
                    message: response.statusText 
                });
                this.$router.push({path:'/manager/order'})
            })
        }
    }
}
</script>
<style scoped>
    .header {
        border-bottom: 1px solid #ebedf0;
    }
    .line  .line-left {
        padding: 1em 0;
        text-align: center;
        font-size: 24px;
    }
    .line  .line-right {
        padding: 1em 0;
        border-bottom: 1px solid #ccc;
    }
    .line  .line-right > .label {
        font-size: 12px;
        font-weight: bold;
        color: #999;
        line-height: 2em;
    }
</style>