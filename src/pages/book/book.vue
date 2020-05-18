<template>
    <div>
        <TopLink></TopLink>
        <div class="kong"></div>
         <div class="main">
            <MovieList title="最受关注图书|虚构类" :imgdata="arra"></MovieList>
            <MovieList title="最受关注图书|非虚构类" :imgdata="arrb"></MovieList>
            <MovieList title="豆瓣纸书|旅行类" :imgdata="arrc"></MovieList>
            <Find :textdata="text1" :textdatab="text2"></Find>
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
            bookText:["不可饶恕的女人","爱欲书","他们还写侦探小说","他们还写侦探小说","人生识字始忧患","诗歌书店","尝试理解人生百味","说走就走的旅行"]
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
            return this.arr.slice(21,27)
        },
        arrb(){
            return this.arr.slice(27,33)
        },
        arrc(){
            return this.arr.slice(33,40)
        },
         text1(){
            return this.bookText.slice(0,4);
        },
        text2(){
            return this.bookText.slice(4,8);
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