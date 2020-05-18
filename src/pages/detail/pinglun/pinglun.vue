<template>
    <div id="ping">
        <div class="pinglun">
            <div class="pl_titl">
                <span>
                    <img src="images/ic_logo_share.png">
                </span>
                <span>
                    <i>豆瓣</i>
                    <br>
                    <em> 2017-03-01 19：30：41</em>
                </span>
            </div>
            <div class="pl_cont">
                <p>可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你</p>
                <span>
                    <i>
                        <img src="images/ic_like.png">
                        <b>4</b>
                    </i>
                    <em>...</em>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
<style scoped>
    #ping{
        width: 100%;
        height: 100%;
        float: left;
        margin-top: .2rem;
    }
    .pinglun{
        width: 85%;
        margin: 0 auto;
        border-bottom: 1px solid #e8e8e8;
        padding-bottom:.12rem;
    }
    .pl_titl{
        height: .6rem;
    }
    .pl_titl span{
        float: left;
    }
    .pl_titl span:nth-child(1){
        width: .54rem;
        height: .54rem;
        margin-right: .14rem;
    }
    .pl_titl span:nth-child(1) img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .pl_titl span:nth-child(2) i{
        font-size: .16rem;
        color: #333;
        font-weight: 700;
        line-height: .28rem;
    }
    .pl_titl span:nth-child(2) em{
        font-size: .12rem;
        color: #aaaaaa;
         line-height: .18rem;
    }
    .pl_cont{
        margin-top: .12rem;
    }
    .pl_cont p{
        color: #494949;
        margin-left: .38rem;
    }
    .pl_cont span{
        margin-left: .38rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .2rem;
    }
    .pl_cont span>i{
        height: .24rem;
        display: flex;
        align-items: center;
    }
    .pl_cont span>i img{
        width: .24rem;
        height: 100%;
    }
    .pl_cont span>i b{
        color: #aaaaaa;
        line-height: .24rem;
    }
    .pl_cont span>em{
        font-size: .18rem;
        color: #cccccc;
    }
</style>