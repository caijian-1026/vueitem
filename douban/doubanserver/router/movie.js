var express = require("express")
var router = express.Router()
var doubancol = require("./db");
    router.get("/movielist",(req,res)=>{
        doubancol.find()
                .then((ok)=>{
                    res.send({msg:"电影页服务请求成功",data:ok});
                })
                .catch((err)=>{
                    console.log(err);
                    res.send({msg:"请求失败"});
                })
    });
    router.get("/searchmain",(req,res)=>{
        res.send({
            mag:"请求成功",
            data:[
                {title:"电影",text:"影院热映"},
                {title:"电视",text:"正在热播"},
                {title:"图书",text:"畅销排行"},
                {title:"同城",text:"周末活动"},
                {title:"小组",text:"志趣相投"},
                {title:"音乐",text:"新碟榜"},
                {title:"阅读",text:"电子书"},
                {title:"游戏",text:"虚拟世界"},
                {title:"应用",text:"玩手机"},
                {title:"东西",text:"心爱之物"},
                {title:"FM",text:"红心歌单"},
                {title:"市集",text:"购买原创"},
            ]
        });
    })
    module.exports = router;