var express = require("express");
var router = express.Router();
var waimaiCol = require("./db");
    router.get("/fenlist",(req,res)=>{
        waimaiCol.find()
                .then((ok)=>{
                    res.send({msg:"请求成功",data:ok});
                })
                .catch((err)=>{
                    console.log(err);
                    res.send({msg:"请求失败"});
                })
    });
    module.exports=router;