<template>
    <div>
        <TopLink></TopLink>
        <div class="kong"></div>
        <div class="main">
            <FirstLogin></FirstLogin>
            <XiaoZuList title="租房找室友" :listdata="arra"></XiaoZuList>
            <h3>更多相关小组</h3>
            <XiaoZuList title="来聊五块钱" :listdata="arrb"></XiaoZuList>
            <h3>来聊五块钱</h3>
            <XiaoZuList title="买买买" :listdata="arrc"></XiaoZuList>
            <h3>更多相关小组</h3>
        </div>
    </div>
</template>
<script>
import TopLink from "@/components/toplink/toplink.vue"
import FirstLogin from "@/components/firstlogin/firstlogin.vue"
import XiaoZuList from "./xiaozulist/xiaozulist"
export default {
    components:{
        TopLink,
        FirstLogin,
        XiaoZuList
    },
    data(){
        return{
            arr:[]
        }
    },
    mounted(){
        this.axios({
            url:"/xiaozu/xiaozulist",
            method:"get"
        }).then((ok)=>{
            this.arr=ok.data
        })
    },
    computed:{
        arra(){
            return this.arr.xiaozua
        },
        arrb(){
            return this.arr.xiaozub
        },
        arrc(){
            return this.arr.xiaozuc
        }
    }
}
</script>
<style scoped>
    .kong{
        height: .5rem;
    }
    .main{
        overflow-y: auto;
    }
    .main>h3{
        font-size: .16rem;
        text-align: center;
        line-height: .48rem;
        color: #42bd56;
        margin: .14rem 0;
    }
</style>