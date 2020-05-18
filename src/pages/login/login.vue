<template>
    <div>
         <div id="user">
            <div id="top">
                <span>取消</span>
                <div class="top">
                    <h1>登录豆瓣</h1>
                </div>
            </div>
            <div id="main">
                <input type="text" placeholder="用户名/邮箱" v-model="username">
                <input type="password" placeholder="密码" v-model="password">
                <button @click="fun()">登录</button>
                <p>
                    <router-link to="/zhuce">没有账号？去注册</router-link>
                </p>
                <span>
                    <i>
                        <router-link to="/zhuce">注册豆瓣账号</router-link>
                    </i>
                    <em>下载豆瓣App</em>
                </span>
            </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
         fun(){
            var username=this.username;
            var password=this.password
            var usp=new URLSearchParams();
            usp.append("username",username);
            usp.append("password",password);
            this.axios({
                url:'/api/user/login',
                method:"post",
                data:usp
            }).then((ok)=>{
                console.log(ok.data);
                if(ok.data.status==200){
                    alert(ok.data.msg);
                    window.localStorage.setItem("token",ok.data.token);
                    this.$router.push({path:"/home"});
                }else{
                    if(ok.data.status==400){
                    alert(ok.data.msg);
                        this.username="";
                        this.password=""
                    }
                }
            })
        }
    }
}
</script>
<style scoped>
     #top{
        width: 100%;
        height: .5rem;
        display: flex;
        align-items: center;
    }
    #top>span{
        height: .42rem;
        margin-left: .1rem;
        line-height: .42rem;
        text-align: center;
        color: #17aa52;
    }
    .top{
        width: 80%;
        margin-left: .16rem;
        border-bottom: 1px solid #eeeeee;
    }
    .top>h1{
        line-height: .5rem;
        text-align: center;
        font-size: .18rem;
        font-weight: 700;
        color: #333;
    }
    #main{
        width: 100%;
        margin-top: .26rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #main>input{
        width: 2.8rem;
        height: .36rem;
        font-size: .14rem;
        margin-left: .1rem;
        text-indent: .1rem;
        line-height: .5rem;
        border: 1px solid #cccccc;
        border-radius: .04rem;
    }
    #main>button{
        width: 2.82rem;
        height: .5rem;
        color: #ffffff;
        font-size: .16rem;
        margin-left: .1rem;
        margin-top: .1rem;
        background-color: #17aa52;
        border-radius: .04rem;
    }
    #main input:nth-child(1){
        border-bottom: 0;
    }
    #main>p{
        line-height: .28rem;
        margin-top: .1rem;
    }
    #main>p>a{
        color: #aaaaaa;
    }
    #main>span{
        line-height: .28rem;
        margin-top: .2rem;
    }
    #main>span>i{
        font-size: .16rem;
    }
    #main>span>i>a{
        color: #17aa52;
    }
    #main>span>em{
        font-size: .16rem;
        color: #17aa52;
        margin-left: .12rem;
    }
</style>