<template>
    <div id="login">
        <div class="xct">  
            <img src="../assets/image/logo.png" alt="">
        </div>
        <!-- {{form}} -->
        <div class="header">
            <!-- <div class="logo">logo</div> -->
            <div class="title">家政服务平台</div>
        </div>
        <div class="login-content">
            <!-- 用户名密码 -->
            <van-cell-group class="input" round >
                <van-field
                    v-model="form.username"
                    required
                    clearable
                    label="用户名"
                    left-icon="contact"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    @click-right-icon="$toast('question')"
                />
                <van-field
                    v-model="form.password"
                    type="password"
                    label="密码"
                    left-icon="closed-eye"
                    right-icon="question-o"
                    placeholder="请输入密码"
                    required
                />
            </van-cell-group>
            <!-- /用户名密码 -->
        </div>
        <div class="login-submit">
            <van-button round style="width:80%" color="linear-gradient(to right, #8cc7f4, #55a3e8)" @click="submitHandler">登录</van-button>
        </div>
    </div>
</template>
<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        data(){
            return {
                form:{
                    type:"waiter"
                }
            }
        },
        methods:{
            ...mapActions('user',["login"]),
            submitHandler(){
                this.login(this.form)
                .then(()=>{
                    // 跳转到首页
                    this.$router.push({path:"/home"})
                })
                
            }
        }
    }
</script>
<style scoped>
    #login {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow-y: auto;
        background-color: lightblue;
    }
    .xct {
        width: 100px;
        height: 100px;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin: 50px auto;
        margin-bottom: 0;
        position: relative;
        margin-top: 40px;
    }
    .xct > img{
        width: 90%;
        height: 90%;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        right: 5px;
    }
    .header {
        box-sizing: border-box;
        height: 90px;
        /* background-color: #7598ff; */
        color: #333;
        text-align: center;
        padding-top: 20px;
    }
    .header .logo {
        height: 50px;
        line-height: 50px;
    }
    .header .title {
        font-size: 28px;
    }
    .login-content {
        margin-bottom: 1.5em;
    }
    .login-submit {
        text-align: center;
    }
    .input {
        margin: 0 40px;
        text-align: center;
    }
</style>