<template>
    <div class="normal">
        <full-Layout title="通用设置" @back="onClickLeft">
            <div class="content">
                <van-cell>
                    指纹/面容支付
                    <van-switch size="20px" style="position:absolute;right:0" v-model="checked_one" active-color="#07c160" inactive-color="#fff" />
                </van-cell>
                <van-cell>
                    开启首页摇一摇
                    <van-switch size="20px" style="position:absolute;right:0" v-model="checked_two" active-color="#07c160" inactive-color="#fff" />
                </van-cell>
                <van-cell>
                    截屏后提示分享
                    <van-switch size="20px" style="position:absolute;right:0" v-model="checked_three" active-color="#07c160" inactive-color="#fff" />
                </van-cell>
                <van-cell>
                    WIFI下自动播放视频
                    <van-switch size="20px" style="position:absolute;right:0" v-model="checked_four" active-color="#07c160" inactive-color="#fff" />
                </van-cell>
                <van-cell is-link @click="clearHandler">
                    清除缓存
                </van-cell>
            </div>
        </full-Layout>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    import Vue from 'vue';
    import { NavBar } from 'vant';
    import { Dialog } from 'vant';

    Vue.use(NavBar);

    export default {
         data() {
            return {
                checked_one: true,
                checked_two: true,
                checked_three:false,
                checked_four:true
            };
        },
        computed:{
            ...mapState("user",["info"])
        },
        methods:{
             onClickLeft() {
                this.$router.push({path:'/manager/user'})
            },
            // 清除缓存
            clearHandler(){
                Dialog.confirm({
                  	message: '您确认清除缓存吗？'
                }).then(() => {
                	// this.logout()
                	// .then(()=>{
                        
                	// })
                }).catch(() => {
                  	// on cancel
                });
            }
        },
    }
</script>
<style scoped>

</style>