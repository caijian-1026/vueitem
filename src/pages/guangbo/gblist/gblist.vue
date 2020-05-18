<template>
     <div id="ping">
        <div class="pinglun">
            <div class="pl_titl">
                <span>
                    <img src="images/ic_logo_share.png">
                </span>
                <span>
                    <i>豆瓣</i><b>写了日记</b>
                    <br>
                    <em> 2017-03-01 19：30：41</em>
                </span>
            </div>
            <div class="pl_cont">
                <div class="pl_text">
                    <h4>豆瓣app 4.0.1 主要更新</h4>
                    <p>
                        — 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
                    </p>
                </div>
                <span>
                   <div class="icon">
                        <i>
                            <img src="images/ic_like.png">
                            <b>4</b>
                        </i>
                        <i>
                            <img src="images/ic_reply.png">
                            <b>0</b>
                        </i>
                        <i>
                            <img src="images/ic_reshare_gray.png">
                            <b>1</b>
                        </i>
                   </div>
                    <em>...</em>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
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
    .pl_titl span:nth-child(2)>b{
        font-size: .16rem;
        color: #aaaaaa;
        line-height: .18rem;
        font-weight: normal;
        margin-left: .06rem;
    }
    .pl_titl span:nth-child(2) em{
        font-size: .12rem;
        color: #aaaaaa;
         line-height: .18rem;
    }
    .pl_text{
        margin-left: .3rem;
        padding: .1rem .14rem;
        border: 1px solid #d8d8d8;
    }
    .pl_text h4{
        line-height: .34rem;
    }
    .pl_text>p{
        color: #d8d8d8;
        font-size: .12rem;
        line-height: .18rem;
    }
    .pl_cont span{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .2rem;
    }
    .icon{
        width: 52%;
        margin-left: .38rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .icon>i{
        height: .22rem;
        display: flex;
        align-items: center;
    }
    .icon>i img{
        width: .22rem;
        height: 100%;
    }
    .icon>i>b{
        color: #d8d8d8;
        line-height: .24rem;
        margin-left: .04rem;
    }
    .pl_cont span>em{
        font-size: .18rem;
        color: #cccccc;
    }
</style>