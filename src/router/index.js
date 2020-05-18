import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 实例和路由规则
export default new Router({
    routes:[
        {name:"home",path:"/home",component:()=>import("@/pages/home/home.vue")},
        {name:"book",path:"/book",component:()=>import("@/pages/book/book.vue")},
        {name:"movie",path:"/movie",component:()=>import("@/pages/movie/movie.vue")},
        {name:"detail",path:"/detail",component:()=>import("@/pages/detail/detail.vue")},
        {name:"guangbo",path:"/guangbo",component:()=>import("@/pages/guangbo/guangbo.vue")},
        {name:"login",path:"/login",component:()=>import("@/pages/login/login.vue")},
        {name:"zhuce",path:"/zhuce",component:()=>import("@/pages/zhuce/zhuce.vue")},
        {name:"search",path:"/search",component:()=>import("@/pages/search/search.vue")},
        {name:"xiaozu",path:"/xiaozu",component:()=>import("@/pages/xiaozu/xiaozu.vue")},
        {path:"*",redirect:"/home"}
    ]
})