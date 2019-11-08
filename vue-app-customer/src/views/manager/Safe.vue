<template>
    <div class="safe">
        <full-Layout title="账户与安全" @back="onClickLeft">
            <!-- 标题栏 -->
            <!-- <van-nav-bar
                title="账户与安全"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
            /> -->
            <van-row style="relative">
                <van-col>
                    <van-cell title="账户ID" size="large" icon="filter-o" />
                </van-col>
                <van-col style="position: absolute;line-height:3em;right:20px">{{info.id}}</van-col>
            </van-row>
            <van-row style="relative">
                <van-col>
                    <van-cell title="账户名称" size="large" icon="manager-o" />
                </van-col>
                <van-col style="position: absolute;right: 20px;line-height:3em">{{info.name}}</van-col>
            </van-row>
        </full-Layout>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    import Vue from 'vue';
    import { NavBar } from 'vant';

    Vue.use(NavBar);

    export default {
        computed:{
            ...mapState("user",["info"])
        },
        methods:{
             onClickLeft() {
                this.$router.push({path:'/manager/user'})
            },
        }
    }
</script>
<style scoped>

</style>