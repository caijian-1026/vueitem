<template>
    <div id="top">
        <span>关闭</span>
        <div class="sousuo">
            <input type="text" id="sou">
            <i>
                <img src="images/ic_search.png" />
            </i>
        </div>
        <span>搜索</span>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #top{
        height: .5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f3f3f3;
    }
    #top>span{
        width: 12%;
        height: .5rem;
        text-align: center;
        line-height: .5rem;
        color: #42bd56;
    }
    .sousuo{
        width: 78%;
        height: 74%;
        position: relative;
    }
    #sou{
        width: 100%;
        height: 100%;
        border-radius: .04rem;
        background-color: #f3f3f3;
    }
    .sousuo i{
        display: block;
        width: .22rem;
        height: .22rem;
        position: absolute;
        top: 22%;
        left: 50%;
    }
    .sousuo i>img{
        width: 100%;
        height: 100%;
    }
</style>