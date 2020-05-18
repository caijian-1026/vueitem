<template>
    <div>
        <TopLink></TopLink>
        <ToLogin></ToLogin>
        <ListItem :obj="arr"></ListItem>
    </div>
</template>
<script>
import TopLink from "@/components/toplink/toplink.vue"
import ToLogin from "@/pages/home/tologin/tologin.vue"
import ListItem from "@/pages/home/listitem/listitem.vue"
export default {
    components:{
        TopLink,
        ToLogin,
        ListItem
    },
    data(){
        return{
            arr:[],
        }
    },
    mounted() {
        this.axios({
            url:"/home/homelist",
            method:"get",
        }).then((ok)=>{
            this.arr=ok.data.shouye 
        })
        var token = window.localStorage.getItem("token");
        console.log(token);
        if(token==null){
            alert("您还没有登录，请先登录");
            this.$router.push({path:"/login"});
        }
    },
}
</script>
<style scoped>

</style>