<template>
    <div class="home">
        <!-- 上面图片 -->
        <van-row>
            <img style="width:100%" src="../image/shouye.jpg" alt="">
        </van-row>
        <!-- 显示分类 -->
        <!-- {{categories}} -->
        <van-grid :column-num="3" >
            <van-grid-item v-for="(item,index) in categories" 
            :key="item.id" 
            :icon="item.icon" 
            :text="item.name" 
            @click="toProductCategoryHandler(item.id,index)"
            />
        </van-grid>

        <!-- 产品信息 -->
        <van-grid :column-num="2">
        <van-grid-item
            v-for="p in products"
            :key="p.id">
            <van-image :src="p.photo" />
            <div>{{p.name}}</div>
        </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
export default {
    data(){
        return {

        }
    },
    computed:{
        ...mapState("home",["categories","products"]),
    },
    created(){
        this.findAllCategories();
        this.queryProduct({page:0,pageSize:4});
    },
    methods:{
        // ...mapMutations("category",[""]),
        ...mapActions("home",["findAllCategories","queryProduct"]),
        //跳转产品分类页面
        toProductCategoryHandler(id,activeKey){
            this.$router.push({
                path:'/category',
                query:{id,activeKey}               
            })
        }
    }
}
</script>
<style scoped>
    
</style>