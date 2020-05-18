import Vue from 'vue'
import App from './App.vue'
// 引用模拟数据
require("./mock/index.js")

Vue.config.productionTip = false
// 引用路由
import router from "@/router/index.js"
// 引用vuex
import { store } from "@/store/store.js"
// axios配置
import axios from "axios"
Vue.prototype.axios=axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
