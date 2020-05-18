import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
// 在全局中使用 vuex 
    Vue.use(Vuex);
// 实例化vuex中的store对象
    export let store = new Vuex.Store({
        state:{
            arr:[],
        },
        getters:{},
        mutations:{
            updata(state,payload){
                state.arr=payload
            }
        },
        actions:{
            ajaxlink(store){
                axios({
                    url:"/api/vuex/searchmain",
                    method:"get"
                }).then((ok)=>{
                    store.commit("updata",ok.data.data);
                })
            }
        }
    })