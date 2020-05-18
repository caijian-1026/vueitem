<template>
    <div id="toLogin">
    <div class="box_item">
        <div class="item" v-for="(v,i) in arr" :key="i">
        <router-link :to="v.linkto">{{v.title}}</router-link>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[
                {title:"影院热映",linkto:"/"},
                {title:"欧美新碟榜",linkto:"/"},
                {title:"注册账号",linkto:"/zhuce"},
                {title:"登录豆瓣",linkto:"/login"}
            ]
        }
    },
}
</script>
<style scoped>
    #toLogin{
        position: absolute;
        top: .48rem;
        width: 100%;
        height: 1rem;
        margin-top: .1rem;
    }
    .box_item{
        width: 80%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .item{
        width: 48%;
        height: 42%;
        text-align: center;
        line-height: .44rem;
        background-color: #f6f6f6;
    }
    .item a{
        color: #333;
    }
</style>