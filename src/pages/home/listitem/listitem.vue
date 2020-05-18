<template>
    <div id="main">
        <div class="item"  v-for="(v,i) in obj" :key="i">
            <div class="item_left">
                <h3>{{v.title}}</h3>
                <p>{{v.time_str}}</p>
                <span>{{v.category_name}}</span>
            </div>
            <div class="item_right">
                <img :src="v.image" alt="图片">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["obj"]
}
</script>
<style scoped>
    #main{
        position: absolute;
        top: 1.8rem;
        width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: white;
    }
    .item{
        width: 80%;
        height: 1.4rem;
        margin: 0 auto;
        border-bottom: 1px solid #e3e3e3;
    }
    .item_left{
        width: 70%;
        height: 100%;
        float: left;
        position: relative;
    }
        .item_left h3{
            line-height: .28rem;
            font-size: .14rem;
            margin-top: .1rem;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .item_left p{
            line-height: .24rem;
            color: #aaaaaa;
            margin-top: .06rem;
            font-size: .12rem;
        }
        .item_left span{
            display: block;
            color: #aaaaaa;
            line-height: .18rem;
            position: absolute;
            bottom: .08rem;
            font-size: .12rem;
        }
    .item_right{
        width: 30%;
        height: 100%;
        float: right;
        display: flex;
        align-items: center;
    }
    .item_right img{
        width: 100%;
        height: 80%;
    }
</style>