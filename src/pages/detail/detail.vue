<template>
    <div>
        <TopLink></TopLink>
        <div class="kong"></div>
        <div class="mian">
            <ListCont :listdata="arr"></ListCont>
            <div class="plname">
                <h3>{{pltext}}的短评:</h3>
            </div>
            <PingLun></PingLun>
            <PingLun></PingLun>
            <PingLun></PingLun>
            <PingLun></PingLun>
            <PingLun></PingLun>
            <PingLun></PingLun>
            <PingLun></PingLun>
        </div>
    </div>
</template>
<script>
import TopLink from "@/components/toplink/toplink.vue"
import ListCont from "./listcont/listcont"
import PingLun from "./pinglun/pinglun"
export default {
    components:{
        TopLink,
        ListCont,
        PingLun
    },
    data(){
        return{
            arr:[],
            pltext:''
        }
    },
    mounted(){
        this.arr.push(this.$route.query.listdata)
        this.pltext=this.$route.query.listdata.title;
    }
}
</script>
<style scoped>
    .kong{
        height: .5rem;
    }
    .main{
        height: 100%;
        overflow-y: auto;
    }
    .plname{
        width: 100%;
        float: left;
    }
    .plname>h3{
        width: 85%;
        margin: 0 auto;
        color: #aaaaaa;
        font-size: .14rem;
        margin-top: .2rem;
    }
</style>