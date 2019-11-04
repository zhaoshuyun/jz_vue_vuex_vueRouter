<template>
    <div class="category">
        <div class="header">
            <van-nav-bar
                title="商品分类"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
            />
        </div>
        <div class="left">
            <!-- {{categories}} -->
            <van-sidebar v-model="activeKey">
                <van-sidebar-item  @click="categoryId = c.id" v-for="c in categories" :title="c.name" :key="c.id"/>
            </van-sidebar>
        </div>
        <div class="right">
            <!-- {{products}} -->
            <div class="list" v-for="p in productCategoryFilter(categoryId)" :key="p.id">
                <van-card
                    :price="p.price"
                    :desc="p.description"  
                    :title="p.name"
                    :thumb="p.photo"
                />
                <div class="stepper">
                    <van-stepper v-model="p.number" :min="0" @change="numberChangeHandler(p)"/>
                </div>
            </div>
        </div>
        
        <van-submit-bar 
            :price="total*100"
            button-text="提交订单"
            @submit="toConfirmOrderHandler"
        />
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters, mapMutations} from 'vuex'
export default {
    data(){
        return {
            activeKey: 0,
            categoryId:'',
            value:0
            
        }
    },
    computed:{
        ...mapState("home",["products","categories"]),
        ...mapGetters('home',['productCategoryFilter']),
        ...mapGetters("shopcar",["total"])
    },
    created(){
        // 查询所有栏目信息
        this.findAllCategories();
        // 查询所有产品信息
        this.queryProduct({page:0,pageSize:200});
        this.categoryId = this.$route.query.id;
        this.activeKey = this.$route.query.activeKey;

    },
    methods:{
        ...mapMutations("shopcar",["addShopCar"]),
        ...mapActions("home",["findAllCategories","queryProduct"]),
        onClickLeft() {
            this.$router.back();
        },
        toConfirmOrderHandler(){
            // alert(1);
            this.$router.push({path:"/manager/order_confirm"})
        },
        //监听步进器
        numberChangeHandler(val){
            // console.log(val);
            let orderLine = {
                productId:val.id,
                productName:val.name,
                price:val.price,
                number:val.number
            }
            console.log(orderLine);
            this.addShopCar(orderLine);
        }
        
    }
}
</script>
<style scoped>
    .header {
        border-bottom: 1px solid #ebedf0;
    }
    .left{
        float: left;
    }
    .right{
        margin-left: 85px;
        height: 571px;
        overflow: scroll;
    }
    .stepper{
        margin-left: 150px;
    }
</style>