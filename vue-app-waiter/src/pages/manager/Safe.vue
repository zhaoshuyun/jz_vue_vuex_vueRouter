<template>
    <div class="safe">
        <!-- 标题栏 -->
        <!-- {{userinfo}} -->
        <van-nav-bar
            title="账户与安全"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-row style="relative">
            <van-col>
                <van-cell title="账户ID" size="large" icon="filter-o" />
            </van-col>
            <van-col style="position: absolute;line-height:3em;right:20px">{{userinfo.id}}</van-col>
        </van-row>
        <van-row style="relative">
            <van-col>
                <van-cell title="账户名称" size="large" icon="manager-o" />
            </van-col>
            <van-col style="position: absolute;right: 20px;line-height:3em">{{userinfo.name}}</van-col>
        </van-row>
        <!-- <van-row style="relative">
            <van-col>
                <van-cell title="账户密码" size="large" icon="closed-eye" />
            </van-col>
            <van-col style="position: absolute;right: 20px;color:#323233;line-height:3em">{{userinfo.password}}</van-col>
        </van-row> -->

        <!-- <div style="text-align:center;line-height:3em">{{userinfo.name}}</div>
        <div style="text-align:center;line-height:3em">{{userinfo.password}}</div> -->
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    import Vue from 'vue';
    import { NavBar } from 'vant';

    Vue.use(NavBar);

    export default {
        computed:{
            ...mapState("user",["userinfo"])
        },
        methods:{
             onClickLeft() {
                this.$router.push({path:'/user'})
            },
        }
    }
</script>
<style scoped>

</style>