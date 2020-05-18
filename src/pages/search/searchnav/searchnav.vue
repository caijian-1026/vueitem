<template>
    <div id="nav">
        <ul>
            <li>
                <router-link to="/zhuce">注册账号</router-link> 
            </li>
            <span>|</span>
            <li>
                <router-link to="/login">登录豆瓣</router-link>
            </li>
        </ul>
        <ul>
            <li>使用桌面版</li>
            <span>|</span>
            <li>使用豆瓣App</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #nav{
        width: 100%;
    }
    #nav>ul{
        width: 85%;
        height: .5rem;
        margin: 0 auto;
        border-bottom: 1px solid #f3f3f3;
        position: relative;
    }
    #nav>ul>li{
        width: 49%;
        height: .5rem;
        float: left;
        text-align: center;
        line-height: .5rem;
        color: #42bd56;
    }
    #nav>ul>li>a{
        color: #42bd56;
    }
    #nav>ul>span{
        position: absolute;
        top: 22%;
        left: 50%;
        color: #e5e5e5;
        font-size: .18rem;
    }
</style>