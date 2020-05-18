<template>
    <div>
        <TopLink></TopLink>
        <div class="kong"></div>
        <div class="main">
            <div class="banner">
                <img src="images/ic_rec_group_banner_6.png">
            </div>
            <FirstLogin></FirstLogin>
            <GbList></GbList>
            <GbList></GbList>
            <GbList></GbList>
            <GbList></GbList>
            <GbList></GbList>
            <GbList></GbList>
            <GbList></GbList>
        </div>
    </div>
</template>
<script>
import TopLink from "@/components/toplink/toplink.vue"
import FirstLogin from "@/components/firstlogin/firstlogin.vue"
import GbList from "./gblist/gblist"
export default {
    components:{
        TopLink,
        FirstLogin,
        GbList
    }
}
</script>
<style scoped>
    .kong{
        height: .5rem;
    }
    .main{
        width: 100%;
        overflow-y: auto;
    }
    .banner{
        width: 85%;
        margin: 0 auto;
        height: 1rem;
    }
    .banner>img{
        width: 100%;
        height: 100%;
    }
</style>