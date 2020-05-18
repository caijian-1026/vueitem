<template>
    <div id="main">
        <li v-for="(v,i) in arr" :key="i">
            <i>{{v.title}}</i>
            <p>{{v.text}}</p>
        </li>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[]
        }
    },
    mounted() {
        this.$store.dispatch("ajaxlink");
        this.arr=this.$store.state.arr
    },
}
</script>
<style scoped>
    #main{
        width: 85%;
        height: 3.6rem;
        margin: 0 auto;
        margin-top: .14rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-bottom: 1px solid #f3f3f3;
    }
    #main>li{
        width: 32%;
        height: 24%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
     #main>li>i{
         font-size: .2rem;
         color: #2384e8;
     }
     #main>li>p{
         font-size: .14rem;
         color: #999999;
     }
</style>