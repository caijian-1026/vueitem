<template>
    <div>
        <TopLink></TopLink>
        <div class="kong"></div>
        <div class="main">
            <MovieList title="影院热映" :imgdata="arra"></MovieList>
            <MovieList title="免费在线观影" :imgdata="arrb"></MovieList>
            <MovieList title="新片速递" :imgdata="arrc"></MovieList>
            <Find title="发现好电影" :textdata="text1" :textdatab="text2"></Find>
        </div>
    </div>
</template>
<script>
import TopLink from "@/components/toplink/toplink.vue"
import MovieList from "@/components/movielist/movielist.vue"
import Find from "@/components/find/find.vue"
export default {
    components:{
        TopLink,
        MovieList,
        Find
    },
    data(){
        return{
            arr:[],
            movieText:["同时入选IMDB250和豆瓣电影250的电影","带你走进电影世界","同时入选IMDB250和豆瓣电影250的电影","带你走进电影世界","科幻是未来的钥匙----科幻默示录【科幻题材","带你走进电影世界","同时入选IMDB250和豆瓣电影250的电影","带你走进电影世界"]
        }
    },
    mounted(){
        this.axios({
            url:"/api/movie/movielist",
            method:"get"
        }).then((ok)=>{
            this.arr=ok.data.data
        })
    },
    computed:{
        arra(){
            return this.arr.slice(0,6)
        },
        arrb(){
            return this.arr.slice(6,12)
        },
        arrc(){
            return this.arr.slice(12,20)
        },
        text1(){
            return this.movieText.slice(0,4);
        },
        text2(){
            return this.movieText.slice(4,8);
        }
    }
}
</script>
<style scoped>
    .kong{
        height: .5rem;
    }
    .main{
        overflow-y: auto;
    }
</style>