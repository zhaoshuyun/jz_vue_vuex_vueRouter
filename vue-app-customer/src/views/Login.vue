<template>
    <div class="login">
        <div class="tx">
            <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        </div>
        <div class="form">
            <!-- {{form}} -->
            <van-cell-group>
                <van-field
                    v-model="form.username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    
                    @click-right-icon="$toast('question')"
                />
                <van-field
                    v-model="form.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                />
            </van-cell-group>
        </div>
        <div style="text-align:center">
            <van-button type="primary" size="large" @click="loginHandler">登录</van-button>
        </div>
        <div class="footer">家政服务平台-顾客端</div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            form:{
                type:'customer'
            },
        }
    },
    methods:{
        ...mapActions("user",["login"]),
        loginHandler(){
            this.login(this.form)
            .then(()=>{
                //跳转到首页
                this.$router.push({path:'/manager/home'})
            })
        }
    }
}
</script>
<style scoped>
    .login {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow-y: auto;
        background-color: #8ed6a6;
    }
    .tx{
        width: 80px;
        margin: 80px auto 40px;
    }
    .form{
        margin-bottom: 40px;
    }
    .footer{
        text-align: center;
        font-size: 16px;
        color:#fffeff;
        margin-top: 220px;
    }
</style>
