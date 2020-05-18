<template>
    <div>
        <SearchTop></SearchTop>
        <SearchMain></SearchMain>
        <SearchNav></SearchNav>
    </div>
</template>
<script>
import SearchTop from "./searchtop/searchtop"
import SearchMain from "./searchmain/searchmain"
import SearchNav from "./searchnav/searchnav"
export default {
    components:{
        SearchTop,
        SearchMain,
        SearchNav
    }
}
</script>
<style scoped>

</style>