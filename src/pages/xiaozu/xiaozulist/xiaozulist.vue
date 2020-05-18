<template>
    <div id="xzlist">
        <div class="xz_cont">
            <h3>{{title}}</h3>
            <div class="item" v-for="(v,i) in listdata" :key="i">
                <div class="top">
                    <div class="item_l">
                        <img :src="v.images.small" />
                        <i>{{v.title}}</i>
                    </div>
                    <div class="item_r">
                        <em>20005人</em>
                    </div>
                </div>
                <div class="bottom">
                    <p>{{v.group_topic.time}} {{v.group_topic.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["title","listdata"]
}
</script>
<style scoped>
    #xzlist{
        width: 100%;
    }
    .xz_cont{
        width: 85%;
        margin: 0 auto;
        margin-top: .2rem;
    }
    .xz_cont>h3{
        line-height: .3rem;
    }
    .item{
        margin-top: .14rem;
        padding-bottom: .1rem;
        border-bottom: 1px solid #f2f2f2;
    }
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .item_l{
        width: 80%;
    }
    .item_l img{
        float: left;
        width: .48rem;
        height: .48rem;
    }
    .item_l i{
        float: left;
        width: 74%;
        line-height: .52rem;
        margin-left: .16rem;
        font-size: .14rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .item_r em{
        font-size: .12rem;
        color: #cccccc;
    }
    .bottom p{
        line-height: .28rem;
        font-size: .14rem;
        color: #cccccc;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
</style>