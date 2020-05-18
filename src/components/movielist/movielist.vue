<template>
    <div class="movie_list">
        <div class="cont">
            <h3>
                {{title}}
                <i class="more">更多</i>
            </h3>
            <div class="bottom">
                <div class="item" v-for="(v,i) in imgdata" :key="i">
                    <router-link :to="{name:'detail',query:{listdata:v}}"><img :src="v.img"></router-link>
                    <p>{{v.title}}</p>
                    <span>{{v.fen}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["title","imgdata"]
}
</script>
<style scoped>
    .movie_list{
        width: 100%;
    }
    .cont{
        width: 80%;
        margin: 0 auto;
    }
    .cont h3{
        margin: .14rem 0;
        line-height: .30rem;
    }
    .more{
        float: right;
        font-size: .14rem;
        line-height: .30rem;
        color: #00b600;
    }
    .bottom{
        width: 100%;
        display: flex;
        overflow-x: auto;
    }
    .item:nth-child(1){
        margin: 0;
    }
    .item{
        margin-left: .15rem;
    }
    .item p{
        width: .85rem;
        line-height: .24rem;
        text-align: center;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .item span{
        float: right;
        font-size: .12rem;
        color: #aaaaaa;
    }
    .item img{
        width: 1rem;
        height: 1.28rem;
    }
</style>