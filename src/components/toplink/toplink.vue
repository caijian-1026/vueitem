<template>
    <div id="toplink">
        <div class="left">
            <img src="images/logo.png" />
        </div>
        <div class="right">
            <ul>
                <li>
                    <router-link to="/movie">电影</router-link>
                </li>
                <li>
                    <router-link to="/book">图书</router-link>
                </li>
                <li>
                    <router-link to="/guangbo">广播</router-link>
                </li>
                <li>
                    <router-link to="/xiaozu"> 小组</router-link>
                </li>
                <li>
                    <router-link to="/search">
                        <img src="images/ic_status_search_user.png" />
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #toplink{
        width: 100%;
        height: .48rem;
        font-size: .14rem;
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        border-bottom: 1px solid #f3f3f3;
        background-color: white;
        z-index: 999;
    }
    #toplink>div{
        position: absolute;
    }
    .left{
        left: 0;
    }
    .right{
        right: 0;
    }
        .right li{
            float: left;
            line-height: .48rem;
            text-align: center;
            margin-left: .10rem;
        }
        .right li a{
            display: block;
        }
        .right img{
            width: .28rem;
            position: relative;
            top: .1rem;
            right: .04rem;
            margin-left: .05rem;
        }
        .left img{
            width: .5rem;
            margin-left: .1rem;
        }
</style>